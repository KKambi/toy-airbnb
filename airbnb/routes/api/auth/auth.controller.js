const User = require('../../../src/models/User')
const util_auth = require('../../../src/javascripts/util/util_auth')
const util_api = require('../../../src/javascripts/util/util_api')

const authController = {
    register(req, res){
        res.send('register api is working')
    },

    async login(req, res){
        const { uid, password } = req.body
        try{
            const user = await User.findOne({ where: {uid: uid} })
            const token = await util_auth.authenticate(req, user, password)
            util_api.respond(res, "Login Success", token)
        } catch (err) {
            util_api.onError(res, err)
        }
    },
}

module.exports = authController