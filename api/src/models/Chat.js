const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "chat",
    {
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.BIGINT,
      },
    },
    {
      timestamps: false,
    }
  );
};
