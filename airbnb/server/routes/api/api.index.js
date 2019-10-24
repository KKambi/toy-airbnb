const router = require('express').Router();
const auth = require('./auth/auth.index');
const users = require('./users/users.index');
const stays = require('./stays/stays.index');
const reservations = require('./reservations/reservations.index');

router.use('/auth', auth)
router.use('/users', users)
router.use('/stays', stays)
router.use('/reservations', reservations)

module.exports = router