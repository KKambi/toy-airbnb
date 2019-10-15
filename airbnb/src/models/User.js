const Sequelize = require('sequelize')
const sequelize = require('../javascripts/util/util_sequelize')

// User 스키마 정의
const User = sequelize.define('user', {
    uid: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
            is: /[a-z0-9\_\-]*/,
            len: [4, 20],
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    salt: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    authority: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        unique: true,
        validate: {
            min: 0,
            max: 10
        }
    }
})

module.exports = User