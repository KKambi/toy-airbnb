/*
    Load Dependencies
*/
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const redis = require('redis');

/*
    Load Config
*/
const jwtConfig = require('./javascripts/jwt/config');
require('dotenv').config();

/*
    Express Config
*/
const app = express();

// Redis connection
// const redisClient = redis.createClient({
//     host: process.env.REDIS_HOST,
//     port: 6379
// })

// Set the secret key for jwt
app.set('jwt-secret', jwtConfig.secret);

// view engine setup
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routing
app.use('/', require('./routes'));
app.use('/api', require('./routes/api/api.index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
