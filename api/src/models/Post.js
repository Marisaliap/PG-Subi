const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('post', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calification:{
      type: DataTypes.DECIMAL
    }
  },
  {
    timestamps: false,
  }
  );
};
