const { User, Post, Car, Route, Op } = require("../db.js");
const { ClOUD_NAME, APY_KEY_CLOUD, API_CLOUD_SECRET } = process.env;

const postUser = async (req, res, next) => {
  try {
    let {
      name,
      lastName,
      email,
      telephone,
      facebook,
      instagram,
      province,
      city,
      street,
      dni,
      age,
      about,
      genre,
      photo,
      photoDni,
    } = req.body;
    // const result= await cloudinary.v2.uploader.upload(req.file.path)

    const user = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        // photo:result.url,
        photo,
        lastName,
        email,
        telephone,
        facebook,
        instagram,
        province,
        city,
        street,
        dni,
        age,
        about,
        genre,
        calification: [0],
        photoDni,
        // public_id:result.public_id,
      },
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { name } = req.query;
    const { id } = req.params;
    var data;

    if (name) {
      data = await User.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Post,
      });
      data = data.map((user) => {
        return {
          name: user.name,
          lastName: user.lastName,
          genre: user.genre,
          age: user.age,
          calification:
            user.posts
              .map((c) => parseInt(c.calification))
              .reduce((a, b) => a + b, 0) / user.posts.length,
          photo: user.photo,
          email: user.email,
        };
      });

 
    } else if (id) {
      data = await User.findByPk(id, {
        include: [Post, Car, Route],
      });
      
      /*data=data.map((user) => {
        return {
          name: user.name,
          lastName: user.lastName,
          genre:user.genre,
          age:user.age,
          calification:
              user.posts.map((obj) => obj.Post.map((c) => c.calification))
              .reduce((a,b) => a+b,0)/user.posts.length,
          photo: user.photo,
          email: user.email,
        }
      })*/
      const arrayData = Object.values(data)
      let puntaje=0;
      arrayData[0].posts.map((d) => { 
        puntaje += d.calification
      })
      let prom = puntaje / arrayData[0].posts.length;
      console.log(prom)
      console.log(arrayData[0].posts.length, "cantidad de comentarios")
    } else {
      data = await User.findAll();
    }
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      about,
      age,
      street,
      city,
      province,
      telephone,
      facebook,
      instagram,
      email,
      photo,
      calification,
    } = req.body;
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
      email,
      photo,
      calification,
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findByPk(email);
    await user.destroy();
    res.send("Registro elminado");
  } catch (error) {
    next(error);
  }
};

module.exports = { postUser, getUser, putUser, deleteUser };
