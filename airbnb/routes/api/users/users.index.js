const router = require('express').Router()
const controller = require('./users.controller')
const { authAdmin } = require('../../../server/javascripts/middleware/auth.middle')

router.get('/', authAdmin, controller.getUserByUid)
router.get('/all', authAdmin, controller.getUsers)

module.exports = router