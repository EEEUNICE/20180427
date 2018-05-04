var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('main/mainpage');
})
router.get('/application', function(req, res, next) {
    res.render('issue1/application');
})
router.get('/reports', function(req, res, next) {
    res.render('issue1/reports');
})
router.get('/testimony', function(req, res, next) {
    res.render('issue1/testimony');
})
router.get('/video', function(req, res, next) {
    res.render('issue1/video');
})
router.get('/materials', function(req, res, next) {
    res.render('issue1//materials');
})
module.exports = router;