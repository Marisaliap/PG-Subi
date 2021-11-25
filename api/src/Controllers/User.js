//const { UUIDV4 } = require('sequelize/types');
const { User } = require('../db.js');
//const { v4: uuidv4 } = require('uuid')

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
      patent,
      dni,
      age,
      about,
      genre,
      calification,

    } = req.body
    console.log(req.body)
    console.log(dni)

    //created = true --> lo creo
    //createf = false --> lo encontro

    const user = await User.findOrCreate(
      //   {
      //   name,
      //   lastName,
      //   email,
      //   telephone,
      //   facebook,
      //   instagram,
      //   password,
      //   province,
      //   city,
      //   street,
      //   patent,
      //   dni,
      //   age,
      //   about,
      //   genre,
      //   calification,
      // })


      {
        where: {
          dni: dni,
          // name:name,
          // lastname: lastName,
          // email: email,
          // telephone: telephone,
          // facebook: facebook,
          // instagram: instagram,
          // password: password,
          // province: province,
          // city: city,
          // street: street,
          // patent: city,
          // dni: dni,
          // age: age,
          // about: about,
          // genre: genre,
          // patent: patent,
          // calification: calification,
        },
    // })
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
          // name: "rami",
          // lastname: "villamizar",
          // email: "the_pp",
          // telephone: 32255,
          // facebook: "",
          // instagram: "shshshs",
          // password: "jsjsjsjs",
          // province: "hshdjas",
          // city: "boo",
          // street: "hhksksk",
          // patent: "56jk2",
          // dni: 52266,
          // age: 25,
          // about: "muuu",
          // genre: "homme",
          // calification: 5
        }
      // }).spread((contact, created) => {
      //   console.log(created, contact);
      //   res.json(created);
      // });
    })
res.send(user)
  // if(created){
  //   res.send("Ya estabas");
  // }else{
  //   res.send(user);

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
