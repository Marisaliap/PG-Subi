const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('route', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    originName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destinyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    destiny: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    price:{
      type:DataTypes.STRING,
      alloowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    place: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restriction: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
  );
};
