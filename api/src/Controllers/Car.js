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
    const { idUser, patent, brand, model, cylinder, color } = req.body;

    let car = await Car.create({ patent, brand, model, cylinder, color });
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
    const { patent, brand, model, cylinder, color } = req.body;

    const car = await Car.findByPk(id);

    car.update({
      patent,
      brand,
      model,
      cylinder,
      color,
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
