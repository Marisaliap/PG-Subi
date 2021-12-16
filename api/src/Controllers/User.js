const { User, Post, Car, Route, Op, Order, Chat } = require("../db.js");
const axios = require("axios");

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
      cbu,
    } = req.body;

    let user = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
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
        photoDni,
        cbu,
      },
      include: [Post, Car, Order, Route, Chat],
    });

    await axios.post("http://localhost:3001/mail/add", {
        userName: name,
        userEmail: email, 
    });

    res.send(user);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { name, admin } = req.query;
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
        Chat,
      });
      data = data.filter(user => user.isBanned === false)

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
        include: [
          Post,
          Car,
          Chat,
          {
            model: Route,
            include: {
              model: Order,
            },
          },
        ],
      });
      if(admin==="false") data = data.isBanned === false ? data : "Banned user"
    } else {
      data = await User.findAll();
      admin
      if(admin==="false") data = data.filter(user => user.isBanned === false);
    }
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const putUserCal = async (req, res, next) => {
  try {
    const { id } = req.params;
    data = await User.findByPk(id, {
      include: [Post],
    });

    const calification = data.posts;
    let array = [];
    calification.map((d) => {
      array.push(d.calification);
    });
    let calUser = 0;
    let suma = 0;
    if (array.length > 0) {
      array.forEach(function (e) {
        suma += e;
      });

      calUser = suma / array.length;
    }

    const user = await User.findByPk(id);
    user.update({
      calification: calUser,
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
};

const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      genre,
      name,
      lastName,
      about,
      age,
      dni,
      street,
      city,
      province,
      telephone,
      facebook,
      instagram,
      calification,
      photo,
      photoDni,
      isAdmin,
      cbu,
      isBanned,
    } = req.body;

    const user = await User.findByPk(id);
    user.update({
      name,
      lastName,
      genre,
      about,
      age,
      dni,
      street,
      city,
      province,
      telephone,
      facebook,
      instagram,
      calification,
      photo,
      photoDni,
      isAdmin,
      cbu,
      isBanned,
    });

    res.send(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await user.destroy();
    res.send("Registro eliminado");
  } catch (error) {
    next(error);
  }
};

module.exports = { postUser, getUser, putUser, deleteUser, putUserCal };
