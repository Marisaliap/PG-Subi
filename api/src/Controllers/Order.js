const { Order } = require("../db.js");

const getOrder = async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.send(orders);
  } catch (err) {
    next(err);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    await order.destroy();
    res.send("Orden eliminada");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOrder,
  deleteOrder
};
