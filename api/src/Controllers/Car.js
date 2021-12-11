//const { ne } = require("sequelize/types/lib/operators");
const { Car, User } = require("../db.js");

const getCar = async (req, res, next) => {
  try {
    const car = await Car.findAll();
    res.send(car);
  } catch (err) {
    next(err);
  }
};

const postCar = async (req, res, next) => {
  try {
    const { userEmail, patent, brand, model, cylinder, color, greencard, bluecard } = req.body;

    let car = await Car.create({ patent, brand, model, cylinder, color, greencard, bluecard });
    const user = await User.findByPk(idUser);
    await user.addCar(car.id);
    res.send(car);
  } catch (err) {
    next(err);
  }
};

const putCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { patent, brand, model, cylinder, color, greencard, bluecard } = req.body;

    const car = await Car.findByPk(id);

    car.update({
      patent,
      brand,
      model,
      cylinder,
      color,
      greencard,
      bluecard
    });
    res.send(car);
  } catch (error) {
    next(error);
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    await car.destroy();
    res.send(200);
  } catch (error) {
    next(error);
  }
};

module.exports = { getCar, postCar, putCar, deleteCar };
