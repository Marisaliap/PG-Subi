const { User } = require('../db')
const { v4: uuidv4 } = require('uuid')

const postUser = async (req, res) => {
    const {
        name,
        lastname,
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
    } = req.body
    const user = await User.findOrCreate({
        id: User.id,
        name: name,
        lastname: lastname,
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
    })
    res.send(user)
}
