var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Explosive 2026' });
});

/* Страница Dynamite */
router.get('/dynamite', function(req, res, next) {
  res.send('Это страница Dynamite');
});

/* Страница TNT */
router.get('/tnt', function(req, res, next) {
  res.send('Это страница TNT');
});

/* Страница C4 */
router.get('/c4', function(req, res, next) {
  res.send('Это страница C4');
});

module.exports = router;