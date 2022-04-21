var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var usuarioModel = require('./../../models/usuarioModel');



/* GET home page. */
router.get('/', function(req, res, next) {
res.render('admin/novedades', { 
    layout: 'admin/layout'
    });
});

module.exports = router;