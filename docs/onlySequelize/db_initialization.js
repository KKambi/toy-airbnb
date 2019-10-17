const sequelize = require('../server/javascripts/util/util_sequelize');
const User = require('../server/models/User');
const Stay = require('../server/models/Stay');
const Reservation = require('../server/models/Reservation');

// DB에 스키마를 통해 테이블 생성
(async() => {
    // Association 정의
    await User.hasMany(Stay, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: 'host_id',
        allowNull: false
    })
    
    await User.hasMany(Reservation, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: 'guest_id',
        allowNull: false
    })
    
    await Stay.hasMany(Reservation, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: 'stay_id',
        allowNull: false
    });

    await sequelize.sync({
        force: true
    })

    // User seed
    await User.create({
        uid: 'admin',
        password: 'GuCavBEgRo7QJxOH4KXsPE/O7CfCN6QB9kUcy00DStzRYVJgBKG0VAaVx3MEw1+Q5SQ1GASMjDGCbHNOZf547g==',
        salt: 'z490wC8KvuixXQZ8gx3LAkfGxPSt7PjYmdtjyKOWXYpHE33Hc3luWixkxwsnxDL132djCzOhR4pFE6jNkdB6eA==',
        authority: 3
    })

    await User.create({
        uid: 'user',
        password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
        salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
        authority: 0
    })

    await User.create({
        uid: 'host',
        password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
        salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
        authority: 1
    })

    await User.create({
        uid: 'superhost',
        password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
        salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
        authority: 2
    })

    // TODO: Stay seed
    // TODO: Reservation seed
})()