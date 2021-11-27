const { User, Post, Car, Route, Op } = require('../db.js');


const postUser = async (req, res, next) => {
  try {
    const {
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
    } = req.body


    const user = await User.findOrCreate(
      {
        where: {email},
        defaults: {
          name: name,
          lastName: lastName,
          email: email,
          telephone: telephone,
          facebook: facebook,
          instagram: instagram,
          password: password,
          province: province,
          city: city,
          street: street,
          dni: dni,
          age: age,
          about: about,
          genre: genre,
          calification: calification,
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
      });

      data = data.map(user => {
        return {
          name: user.name,
          lastName: user.lastName,
          genre: user.genre,
          age: user.age,
          calification: user.calification,
          photo: user.photo,
          email: user.email,
        }
      })
    }

    else if (id) {
      data = await User.findByPk(id,
        {
          include:[Post,Car,Route]
        }
      );
    }
    res.send(data);

  } catch (error) {
    next(error);
  }
}

const putUser = async (req,res,next) => {
  try {
    const {id} = req.params;
    const {about,age,street,city,province,telephone,facebook,instagram,password,email,photo} = req.body;
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
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await user.destroy();
    res.send("Registro elminado");
  } catch (error) {
    next(error);
  }
}
module.exports = { postUser, getUser, putUser, deleteUser}
