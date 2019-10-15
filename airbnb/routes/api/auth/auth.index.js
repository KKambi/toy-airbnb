const router = require('express').Router()
const controller = require('./auth.controller')
const { authUser, authToken } = require('../../../server/javascripts/middleware/auth.middle')

router.post('/register', controller.register)
router.post('/login', authUser, controller.login)
router.get('/check', authToken, controller.check)
router.post('/logout', controller.logout)

module.exports = router