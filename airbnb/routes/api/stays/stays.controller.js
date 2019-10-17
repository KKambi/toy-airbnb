const util_api = require('../../../server/javascripts/util/util_api')
const models = require('../../../models')

const stayController = {
    // 모든 유저 정보를 반환하는 api
    async getStays(req, res) {
        const stays = await models.Stay.findAll()
        util_api.respondData(res, stays)
    },

    // 특정 유저 정보를 반환하는 api
    async getStayById(req, res){
        const id = req.query.id
        const stay = await models.Stay.findOne({ 
            where: { id }
        })
        util_api.respondData(res, stay)
    }
}

module.exports = stayController