const { User, Post, Car, Route, Op, Order, Chat } = require("../db.js");

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
        calification: 0,
        photoDni,
        cbu,
        // public_id:result.public_id,
      },
      include: [Post, Car, Order, Route, Chat],
      // include: [Post, Car, Route]
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
        Chat,
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
      //--------------------------------------------------------------
      // const calification = data.posts;
      // let array = [];
      // calification.map((d) => {
      //   array.push(d.calification);
      // });
      // let calUser = 0;
      // let suma = 0;
      // array.forEach(function (e) {
      //   suma += e;
      // });
      // calUser = suma / array.length;
      //---------------------------------------------------------------
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
      /*const calification = data.posts;
      let array = [];
      calification.map((d) => {
        array.push(d.calification);
      });
      let calUser = 0;
      let suma = 0;
      array.forEach(function (e) {
        suma += e;
      });
      calUser = suma / array.length;*/
    } else {
      data = await User.findAll();
    }
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const putUserCal = async (req, res, next) => {
  try {
    const { id } = req.params;
console.log("id=>",id)
data = await User.findByPk(id, {
  include: [Post],
});
console.log("data=>",data)

const calification = data.posts;
let array = [];
calification.map((d) => {
  array.push(d.calification);
});
let calUser = 0;
let suma = 0;
array.forEach(function (e) {
  suma += e;
});

calUser = suma / array.length;
console.log("calU=>",calUser)

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
