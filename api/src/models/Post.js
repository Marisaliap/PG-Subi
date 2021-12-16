const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "post",
    {
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      calification: {
        type: DataTypes.FLOAT,
      },
      date: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
