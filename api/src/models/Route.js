const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('route', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    origin: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    destiny: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
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
      allowNull: false,
    },
    passengers: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
  }
  );
};
