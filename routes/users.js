var express = require('express');
var router = express.Router();

/* GET users listing. */
// this callback function is used to handle the HTTP request for the path /users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // could use the next function to pass the request to the next middleware function
});

module.exports = router;
