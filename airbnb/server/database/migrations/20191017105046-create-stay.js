'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Stays', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            host_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'Users',
                    key: 'id',
                }
            },
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
        return queryInterface.dropTable('Stays');
    }
};