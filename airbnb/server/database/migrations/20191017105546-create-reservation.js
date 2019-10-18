'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Reservations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            stay_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'Stays',
                    key: 'id'
                }
            },
            guest_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            check_in: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            check_out: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Reservations');
    }
};