const Sequelize = require('sequelize')
const sequelize = require('../src/js/util/util_sequelize')

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
    guests: {
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
})

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
})

// Association 정의
User.hasMany(Stay, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    foreignKey: {
        allowNull: false
    }
})

User.hasMany(Reservation, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    foreignKey: {
        allowNull: false
    }
})

Stay.hasMany(Reservation, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    foreignKey: {
        allowNull: false
    }
});

// DB에 스키마를 통해 테이블 생성
(async() => {
    await sequelize.sync({
        force: true
    })

    // User seed
    User.create({
        uid: 'admin',
        password: 'GuCavBEgRo7QJxOH4KXsPE/O7CfCN6QB9kUcy00DStzRYVJgBKG0VAaVx3MEw1+Q5SQ1GASMjDGCbHNOZf547g==',
        salt: 'z490wC8KvuixXQZ8gx3LAkfGxPSt7PjYmdtjyKOWXYpHE33Hc3luWixkxwsnxDL132djCzOhR4pFE6jNkdB6eA==',
        authority: 3
    })

    User.create({
        uid: 'user',
        password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
        salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
        authority: 0
    })

    User.create({
        uid: 'host',
        password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
        salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
        authority: 1
    })

    User.create({
        uid: 'superhost',
        password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
        salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
        authority: 2
    })

    // TODO: Stay seed
    // TODO: Reservation seed
})()