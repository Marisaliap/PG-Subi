const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre:{
      type:DataTypes.STRING
    },
    about: {
      type:DataTypes.TEXT
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    patent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facebook: {
      type: DataTypes.STRING,
    },
    instagram: {
      type: DataTypes.STRING,
    },
  });
};
