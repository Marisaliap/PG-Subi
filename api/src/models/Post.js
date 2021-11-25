const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },

    date: {
      type: DataTypes.STRING,
      allowNull: false
    },


    description: {
      type: DataTypes.TEXT,

    },

    calification: {
      type: DataTypes.DECIMAL
    }
  },
    {
      timestamps: false,
    }
  );
};
