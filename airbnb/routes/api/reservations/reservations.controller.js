const util_api = require('../../../server/javascripts/util/util_api')
const models = require('../../../models')

const reservationsController = {
    // 새로운 예약을 입력하는 api
    // TODO: 예약이 겹치지 않도록 검사하는 validation 필요함
    async create(req, res){
        const guest_id = req.decoded.id
        const { stay_id, check_in, check_out } = req.body
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
    // TODO: 예약의 guest_id가, 삭제를 요청하는 유저의 id와 일치하는지 validation 필요함
    async delete(req, res){
        const { id } = req.body
        const user_id = req.decoded.id
        try{
            await models.Reservation.destroy({
                where: { 
                    id,
                    guest_id: user_id
                }
            })
        } catch(err) {
            util_api.respondError(res, err)
        }
        util_api.respondSucess(res, "Cancel reservation suceess")
    }
}

module.exports = reservationsController