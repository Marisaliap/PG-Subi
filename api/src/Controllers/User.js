const { User, Post, Car, Route, Op } = require('../db.js');


const postUser = async (req, res, next) => {
  try {
    let {
      name,
      lastName,
      email,
      telephone,
      facebook,
      instagram,
      password,
      province,
      city,
      street,
      dni,
      age,
      about,
      genre,
      calification,
      photo,
      photoDni,
    } = req.body;

    const user = await User.findOrCreate(

      {
        where: { email },
        defaults: {
          name,
          photo,
          lastName,
          email,
          telephone,
          facebook,
          instagram,
          password,
          province,
          city,
          street,
          dni,
          age,
          about,
          genre,
          calification,
          photoDni,
        }
      })
    res.send(user)

  } catch (error) {
    next(error);
  }
}

const getUser = async (req, res, next) => {
  try {
    const { name } = req.query
    const { id } = req.params
    var data

    if (name) {
      data = await User.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: Post
      }); 
  // console.log(data.map(user =>user.posts.map(c=>parseInt(c.calification)))),
      data = data.map(user => {
        return {
          name: user.name,
          lastName: user.lastName,
          genre: user.genre,
          age: user.age,
          calification: user.posts.map(c=>parseInt(c.calification)).reduce((a,b)=>a+b)/user.posts.length,
          // calification: user.calification.flat().reduce((a, b) => a + b,) / user.calification.length,
          photo: user.photo,
          email: user.email,
        }
      })
    }

    else if (id) {
      data = await User.findByPk(id,
        {
          include: [Post, Car, Route]
        }
      );
    }

    else {
      data = await User.findAll();
    }

    res.send(data);

  } catch (error) {
    next(error);
  }
}

const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { about, age, street, city, province, telephone, facebook, instagram, password, email, photo, calification } = req.body;
    const user = await User.findByPk(id);
    user.update({
      about,
      age,
      street,
      city,
      province,
      telephone,
      facebook,
      instagram,
      password,
      email,
      photo,
      calification: [calification, ...user.calification],
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findByPk(email);
    await user.destroy();
    res.send("Registro elminado");
  } catch (error) {
    next(error);
  }
}

module.exports = { postUser, getUser, putUser, deleteUser }
