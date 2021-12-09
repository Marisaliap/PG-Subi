const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "car",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      patent: {
        type: DataTypes.STRING,
        allowNull: false,
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
        allowNull: true,
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
