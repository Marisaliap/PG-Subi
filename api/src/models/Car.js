const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('car', {
    patent: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cylinder: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
