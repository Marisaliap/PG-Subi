const { Car, User } = require('../db.js');

const getCar = async (req, res, next) => {
  try{
    const car = await Car.findAll();
    res.send(car)
  }
  catch(err) {
    next(err)
  }
}


const postCar = async (req, res, next) => {
  try{
    const {
      id,
      patent,
      brand,
      model,
      cylinder,
      color
    } = req.body;

    let car = await Car.create({patent,brand,model,cylinder,color});
    const user = await User.findByPk(id)
    await user.addCar(patent);
    res.send(car);
  }
  catch(err) {
    next(err)
  }
}



module.exports = { getCar, postCar }
