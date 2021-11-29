const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
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
      type:DataTypes.STRING,
      allowNull:false,

    },
    about: {
      type:DataTypes.TEXT,
      allowNull:true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER,
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
    calification: {
      type: DataTypes.FLOAT,

    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    photo:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoDni:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
  },
  {
    timestamps: false,
  }
  );
};
