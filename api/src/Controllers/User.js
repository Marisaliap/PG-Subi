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
      id=uuidv4(),
    } = req.body
  const user = await User.findOrCreate({
    id: uuidv4(),
    name,
    email,
    password
  })
  res.send(user)
}
