const Sequelize = require('sequelize')
const sequelize = require('../javascripts/util/util_sequelize')

// Reservations 스키마 정의
const Reservation = sequelize.define('reservation', {
    check_in: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    check_out: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'reservation'
})

module.exports = Reservation