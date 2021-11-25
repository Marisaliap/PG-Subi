const { User } = require('../db.js');


const postUser = async (req, res,next) => {
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
    const data = await User.findAll();
    return res.send(data);
  } catch (e) {
    next(e);
  }
}

module.exports = { postUser, getUser }
