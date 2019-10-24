const Sequelize = require('sequelize');
const util_api = require('../../../javascripts/util/util_api');
const models = require('../../../database/models');

const { gt } = Sequelize.Op;

const stayController = {
  // 모든 숙소 정보와 카운트를 반환하는 api
  async getStays(req, res) {
    try {
      const stays = await models.Stay.findAndCountAll({
        attributes: ['id', 'name', 'price', 'guest', 'type', 'image', 'beds', 'bedrooms', 'bathrooms', 'host_id', 'createdAt', 'updatedAt'],
        offset: 1 * 10, //FIXME: page변수로 현재 페이지에 따른거 보여줘야함
        limit: 10,
      });
      util_api.respondData(res, stays);
    } catch (err) {
      util_api.respondError(res, err);
    }
  },

  // 특정 숙소 정보를 반환하는 api
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

  // 총 숙소 개수를 반환하는 api
  async getStaysCount(req, res) {
    try {
      const stays = await models.Stay.count();
      util_api.respondData(res, stays);
    } catch (err) {
      util_api.respondError(res, err);
    }
  },

  // 필터조건에 해당하는 숙소만을 반환하는 api
  async filterStays(req, res) {
    try {
      const { guest } = req.query;
      const stays = await models.Stay.findAndCountAll({
        where: {
          guest: {
            [gt]: guest,
          },
        },
      });
      util_api.respondData(res, stays);
    } catch (err) {
      util_api.respondError(res, err);
    }
  },
};

module.exports = stayController;
