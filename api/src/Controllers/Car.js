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
      cylinder
    } = req.body;

    const car = await Car.findOrCreate({where: {patent,brand,model,cylinder}});
    const user = await User.findByPk(id)
    await user.addCar(patent);
    res.send(car);
  }
  catch(err) {
    next(err)
  }
}



module.exports = { getCar, postCar }
