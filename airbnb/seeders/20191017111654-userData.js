'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            uid: 'admin',
            password: 'GuCavBEgRo7QJxOH4KXsPE/O7CfCN6QB9kUcy00DStzRYVJgBKG0VAaVx3MEw1+Q5SQ1GASMjDGCbHNOZf547g==',
            salt: 'z490wC8KvuixXQZ8gx3LAkfGxPSt7PjYmdtjyKOWXYpHE33Hc3luWixkxwsnxDL132djCzOhR4pFE6jNkdB6eA==',
            authority: 3,
            createdAt: '2019-10-17',
            updatedAt: '2019-10-17'
        }, {
            uid: 'user',
            password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
            salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
            authority: 0,
            createdAt: '2019-10-17',
            updatedAt: '2019-10-17'
        }, {
            uid: 'host',
            password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
            salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
            authority: 1,
            createdAt: '2019-10-17',
            updatedAt: '2019-10-17'
        }, {
            uid: 'superhost',
            password: '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
            salt: 'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
            authority: 2,
            createdAt: '2019-10-17',
            updatedAt: '2019-10-17'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
