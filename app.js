//importing all the required node modules
//express for some reason uses vars instead of consts here

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup

// this is the path where the templates will be stored
app.set('views', path.join(__dirname, 'views'));
// and this is for the template library pug
app.set('view engine', 'pug');


// these are the middleware functions that are used to process the requests
app.use(logger('dev'));

// this is the middleware function that is used to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware for cookies and static files
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



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
