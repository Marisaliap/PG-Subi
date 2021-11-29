const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('post', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calification:{
      type: DataTypes.DECIMAL
    },
    date: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,

  },
  );
};
