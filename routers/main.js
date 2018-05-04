var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('main/index');
})
router.get('/application', function(req, res, next) {
    res.render('main/application');
})
router.get('/reports', function(req, res, next) {
    res.render('main/reports');
})
router.get('/testimony', function(req, res, next) {
    res.render('main/testimony');
})
router.get('/video', function(req, res, next) {
    res.render('main/video');
})
router.get('/materials', function(req, res, next) {
    res.render('main//materials');
})
module.exports = router;