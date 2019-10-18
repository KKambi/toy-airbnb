const router = require('express').Router()
const controller = require('./reservations.controller')
const { authToken } = require('../../../server/javascripts/middleware/auth.middle')

router.post('/create', authToken, controller.create)
router.delete('/delete', authToken, controller.delete)

module.exports = router