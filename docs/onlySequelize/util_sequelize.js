require('dotenv').config();

const Sequelize = require('sequelize');

// Sequelize & MySQL
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        timezone: '+09:00',
        host: process.env.MYSQL_HOST,
        port: 3306,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        define: {
            underscored: true
        },
    }
);

module.exports = sequelize