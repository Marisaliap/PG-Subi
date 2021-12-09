const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('post', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calification:{
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  {
    timestamps: false,

  },
  );
};
