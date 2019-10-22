const router = require('express').Router()
const controller = require('./users.controller')
const { authAdmin } = require('../../../javascripts/middleware/auth.middle')

router.get('/', authAdmin, controller.getUserById)
router.get('/all', authAdmin, controller.getUsers)

module.exports = router