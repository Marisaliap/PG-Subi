const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "car",
    {
      patent: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
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
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      greencard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bluecard: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },

    {
      timestamps: false,
    }
  );
};
