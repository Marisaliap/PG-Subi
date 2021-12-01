const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('suggestionBox', {
    author: {
      type: DataTypes.STRING,
      allownull:false
    },
    authorEmail: {
      type: DataTypes.STRING,
      allownull:false
    },
    suggestion: {
      type: DataTypes.TEXT,
      allownull:false
    }
  },
  {
    timestamps: false,
  }
  );
};
