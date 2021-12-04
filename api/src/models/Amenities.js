const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('amanities', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    
  },

  {
    timestamps: false,
  }
  );
};
