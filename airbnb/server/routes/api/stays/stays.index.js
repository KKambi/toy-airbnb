const router = require('express').Router();
const controller = require('./stays.controller');

router.get('/', controller.getStayById);
router.get('/all', controller.getStays);

module.exports = router;
