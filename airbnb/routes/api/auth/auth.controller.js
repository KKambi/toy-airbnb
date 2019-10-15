const util_api = require('../../../src/javascripts/util/util_api')

const authController = {
    // 회원가입 api
    register(req, res) {
        res.send('register api is working')
    },

    // 로그인 api
    async login(req, res) {
        util_api.respondSucess(res, "Login Success", req.token)
    },

    // 토큰인증 api
    async check(req, res) {
        util_api.respondSucess(res, "Authentication Suceess", req.decoded)
    },

    logout(req, res){
        res.clearCookie('token')
        res.redirect('/')
    }
}

module.exports = authController