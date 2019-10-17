const router = require('express').Router()
const controller = require('./stays.controller')
const { authToken } = require('../../../server/javascripts/middleware/auth.middle')

router.get('/', authToken, controller.getStayById)
router.get('/all', authToken, controller.getStays)

module.exports = router