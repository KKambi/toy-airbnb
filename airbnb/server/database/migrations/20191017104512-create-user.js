'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
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
        return queryInterface.dropTable('Users');
    }
};