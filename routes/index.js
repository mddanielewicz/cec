var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('index', {title: 'Conrad Eye Centers'})
});


/* GET service page */
router.get('/service', function(req, res, next) {
  res.render('service', {title: 'Conrad Eye Centers', subtitle: 'Service'})
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'Conrad Eye Centers', subtitle: 'About'})
});

/* GET Resources page */
router.get('/resources', function(req, res, next) {
  res.render('resources', {title: 'Conrad Eye Centers', subtitle: 'Resources'})
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Conrad Eye Centers', subtitle: 'Contact'})
});

/* GET improve page */
router.get('/improve', function(req, res, next) {
  res.render('improve', {title: 'Conrad Eye Centers'})
});

module.exports = router;