const util_api = require('../../../server/javascripts/util/util_api')
const models = require('../../../server/database/models')

const stayController = {
    // 모든 유저 정보를 반환하는 api
    async getStays(req, res) {
        try{
            const stays = await models.Stay.findAll()
            models.Stay.create()
            util_api.respondData(res, stays)
        } catch(err) {
            util_api.respondError(res, err)
        }
    },

    // 특정 유저 정보를 반환하는 api
    async getStayById(req, res){
        const id = req.query.id || req.body.id
        try{
            const stay = await models.Stay.findOne({ 
                where: { id }
            })
            util_api.respondData(res, stay)
        } catch(err) {
            util_api.respondError(res, err)
        }
    }
}

module.exports = stayController