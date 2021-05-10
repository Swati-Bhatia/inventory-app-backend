var express = require('express');
var user = require('./user');
var products = require('./products');

var router = express.Router();



router.use('/auth/user', user);
router.use('/api/products', products);

module.exports = router;