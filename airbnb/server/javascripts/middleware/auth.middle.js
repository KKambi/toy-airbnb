const util_api = require('../util/util_api')
const util_jwt = require('../util/util_jwt')
const util_cookie = require('../util/util_cookie')
const models = require('../../../models')

const authAdmin = async (req, res, next) => {
    const token = req.headers['x-access-token'] || req.query.token || req.cookies.token

    if (!token) util_api.respondFail(res, "Token doesn't exist")

    try {
        const decoded = await util_jwt.verifyJWT(req, token)
        if (decoded.authority < 3) util_api.respondFail(res, "You're not admin")
        req.decoded = decoded
        next()
    } catch(err) {
        util_api.respondError(res, err)
    }
}

const authUser = async (req, res, next) => {
    const { uid, password } = req.body
    try {
        const user = await models.User.findOne({ where: { uid: uid } })
        const userInfo = user ? user.dataValues : null

        if (!user) throw new Error("User not exist")  // 입력된 uid에 해당하는 유저가 없는 경우
        if (!models.User.verify(password, userInfo.salt, userInfo.password)) throw new Error("Password not match")    // uid는 존재하나 비밀번호가 틀린 경우
            
        const token = await util_jwt.makeJWT(req, userInfo)
        req.token = token
        res.cookie('token', req.token, util_cookie.TOKEN_COOKIE_OPTIONS)
        next()
    } catch (err) {
        util_api.respondError(res, err)
    }
}

const authToken = async (req, res, next) => {
    const token = req.headers['x-access-token'] || req.query.token || req.cookies.token

    if (!token) util_api.respondFail(res, "Token doesn't exist")

    try {
        const decoded = await util_jwt.verifyJWT(req, token)
        req.decoded = decoded
        next()
    } catch(err) {
        util_api.respondError(res, err)
    }
}

module.exports = {
    authAdmin,
    authUser,
    authToken
}