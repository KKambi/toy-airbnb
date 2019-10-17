const util_api = require('../../../server/javascripts/util/util_api')
const models = require('../../../models')

const userController = {
    // 모든 유저 정보를 반환하는 api
    async getUsers(req, res) {
        const users = await models.User.findAll({
            attributes: ['id', 'uid', 'authority', 'createdAt', 'updatedAt']
        })
        util_api.respondData(res, users)
    },

    // 특정 유저 정보를 반환하는 api
    async getUserByUid(req, res){
        const uid = req.query.uid
        const user = await models.User.findOne({ 
            where: { uid },
            attributes: ['id', 'uid', 'authority', 'createdAt', 'updatedAt']
        })
        util_api.respondData(res, user)
    }
}

module.exports = userController