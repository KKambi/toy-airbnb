'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stay = sequelize.define('Stay', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    guest: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    image: DataTypes.STRING,
    beds: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER
  }, {});
  Stay.associate = function(models) {
    // associations can be defined here
  };
  return Stay;
};