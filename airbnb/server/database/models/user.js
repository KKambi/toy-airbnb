'use strict';

const util_encryption = require('../../javascripts/util/util_encryption')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        uid: DataTypes.STRING,
        password: DataTypes.STRING,
        salt: DataTypes.STRING,
        authority: DataTypes.INTEGER
    }, {});

    User.associate = function (models) {
        // associations can be defined here
        models.User.hasMany(models.Stay, {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            foreignKey: 'host_id',
            allowNull: false
        })

        models.User.hasMany(models.Reservation, {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            foreignKey: 'guest_id',
            allowNull: false
        })
    };

    User.verify = function (inputPassword, storedSalt, storedPassword) {
        return util_encryption.isSame(inputPassword, storedSalt, storedPassword)
    }

    return User;
};