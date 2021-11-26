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
        where: {
          dni: dni,
        },

        defaults: {
          photo:photo ||"C:\Users\USER\Desktop\subi\PG-Subi\api\src\img\istockphoto-1125710832-1024x1024.jpg",
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
          id: user.id,

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

module.exports = { postUser, getUser }
