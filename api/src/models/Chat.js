const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('chat', {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    date: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    timestamps: false,
  },
  );
};
