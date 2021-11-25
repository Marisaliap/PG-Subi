
const { User, Op } = require('../db.js');


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
      patent,
      dni,
      age,
      about,
      genre,
      calification,
    } = req.body




    const user = await User.findOrCreate(
      {
        where: {
          dni: dni,
        },

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
          patent: city,
          dni: dni,
          age: age,
          about: about,
          genre: genre,
          patent: patent,
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
        }
      });

      data = data.map(user => {
        return {
          name: user.name,
          lastName: user.lastName,
          genre: user.genre,
          age: user.age,
          calification: user.calification,
          photo: user.photo,
          id: user.id,

        }
      })
    }
    else if (id) {
      data = await User.findByPk(id);
    }
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = { postUser, getUser }
