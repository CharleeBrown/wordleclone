var express = require('express');
var router = express.Router();// Import the functions you need from the SDKs you need

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
