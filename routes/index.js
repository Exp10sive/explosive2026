var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Explosive 2026' });
});

/* Страница Dynamite */
router.get('/dynamite', function(req, res, next) {
  res.render('explosive', { 
    title: 'Dynamite',
    picture: '/images/dynamite.jpg',
    desc: 'Классическая динамитная шашка. Мощная и надёжная.'
  });
});

/* Страница TNT */
router.get('/tnt', function(req, res, next) {
  res.render('explosive', { 
    title: 'TNT',
    picture: '/images/tnt.jpg',
    desc: 'Тринитротолуол. Один из самых известных взрывчатых веществ.'
  });
});

/* Страница C4 */
router.get('/c4', function(req, res, next) {
  res.render('explosive', { 
    title: 'C4',
    picture: '/images/c4.jpg',
    desc: 'Пластичная взрывчатка. Удобна в применении и очень мощная.'
  });
});

module.exports = router;