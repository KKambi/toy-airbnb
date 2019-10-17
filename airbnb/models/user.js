'use strict';

const util_encryption = require('../server/javascripts/util/util_encryption')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        uid: DataTypes.STRING,
        password: DataTypes.STRING,
        salt: DataTypes.STRING,
        authority: DataTypes.INTEGER
    }, {});

    User.associate = function (models) {
        // associations can be defined here
    };

    User.verify = function (inputPassword, storedSalt, storedPassword) {
        return util_encryption.isSame(inputPassword, storedSalt, storedPassword)
    }

    return User;
};