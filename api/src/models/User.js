const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      about: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
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
        
      },
      facebook: {
        type: DataTypes.STRING,
      },
      instagram: {
        type: DataTypes.STRING,
      },
      calification: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:
          "https://raw.githubusercontent.com/Yooololo/imagenesquemesirven/586e35f5a0f1fa7db361bb7db372d06fc8155e61/avatar.svg",
      },
      photoDni: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      cbu: {
        type: DataTypes.STRING,
        defaultValue: " ",
      },
    },
    {
      timestamps: true,
    }
  );
};
