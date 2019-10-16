const Sequelize = require('sequelize')
const sequelize = require('../javascripts/util/util_sequelize')

// Stays 스키마 정의
const Stay = sequelize.define('stay', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    guest: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    type: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        validate: {
            min: 0,
            max: 10
        }
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    beds: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    bedrooms: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    bathrooms: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'stay'
})

module.exports = Stay