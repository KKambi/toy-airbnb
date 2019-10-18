const util_api = require('../../../server/javascripts/util/util_api')
const models = require('../../../models')

const reservationsController = {
    // 새로운 예약을 입력하는 api
    async create(req, res){
        const { stay_id, guest_id, check_in, check_out } = req.body
        try{
            await models.Reservation.create({
                stay_id, guest_id, check_in, check_out
            })
        } catch(err) {
            util_api.respondError(res, err)
        }
        util_api.respondSucess(res, "Reservation suceess")
    },

    // 예약을 취소하는 api
    async delete(req, res){
        const { id } = req.body
        try{
            await models.Reservation.destroy({
                where: { id }
            })
        } catch(err) {
            util_api.respondError(res, err)
        }
        util_api.respondSucess(res, "Cancel reservation suceess")
    }
}

module.exports = reservationsController