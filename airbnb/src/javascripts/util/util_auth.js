require('dotenv').config()
const jwt = require('jsonwebtoken')
const util_encryption = require('../util/util_encryption')
const util_is = require('../util/util_is')

const util_auth = {
    authenticate: function(req, user, password){
        if (!util_is.isExist(user)) throw new Error("User not exist")  // 입력된 uid에 해당하는 유저가 없는 경우
        
        const userInfo = user.dataValues
        if (!util_encryption.verify(password, userInfo.salt, userInfo.password)) throw new Error("Password not match")    // uid는 존재하나 비밀번호가 틀린 경우
        
        return this.makeJWT(req, userInfo)
    },

    makeJWT: function(req, userInfo){
        const secret = req.app.get('jwt-secret')
        const promise = new Promise((resolve, reject) => {
            jwt.sign(
                {
                    id: userInfo.id,
                    uid: userInfo.uid,
                    authority: userInfo.authority
                },
                secret,
                {
                    expiresIn: '7d',
                    issuer: process.env.JWT_ISSUER,
                    subject: 'userInfo'
                }, (err, token) => {
                    if (err) reject(err)
                    resolve(token)
                }
            )
        })
        return promise
    },
}

module.exports = util_auth