'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    check_in: DataTypes.DATEONLY,
    check_out: DataTypes.DATEONLY
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};