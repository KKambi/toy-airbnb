const util_api = require('../../../javascripts/util/util_api');
const models = require('../../../database/models');

const stayController = {
  // 모든 유저 정보를 반환하는 api
  async getStays(req, res) {
    try {
      const stays = await models.Stay.findAll({
        attributes: ['id', 'name', 'price', 'guest', 'type', 'image', 'beds', 'bedrooms', 'bathrooms', 'host_id', 'createdAt', 'updatedAt'],
        offset: 1 * 10, //FIXME: page변수로 현재 페이지에 따른거 보여줘야함
        limit: 10,
      });
      util_api.respondData(res, stays);
    } catch (err) {
      util_api.respondError(res, err);
    }
  },

  // 특정 유저 정보를 반환하는 api
  async getStayById(req, res) {
    const id = req.query.id || req.body.id || req.params.id;
    try {
      const stay = await models.Stay.findOne({
        where: { id },
        attributes: ['id', 'name', 'price', 'guest', 'type', 'image', 'beds', 'bedrooms', 'bathrooms', 'host_id', 'createdAt', 'updatedAt'],
      });
      util_api.respondData(res, stay);
    } catch (err) {
      util_api.respondError(res, err);
    }
  },
};

module.exports = stayController;
