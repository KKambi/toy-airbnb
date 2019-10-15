require('dotenv').config()
const jwt = require('jsonwebtoken')

const util_jwt = {
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
                    expiresIn: '1h',
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

    verifyJWT: function(req, token){
        const promise = new Promise(
            (resolve, reject) => {
                jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                    if (err) reject(err)
                    resolve(decoded)
                })
            }
        )
        return promise
    }
}

module.exports = util_jwt