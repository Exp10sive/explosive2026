var express = require('express');
var router = express.Router();

/* GET explosives listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор для маршрутов, начинающихся с /explosives');
});

/* Страница конкретного взрывчатого вещества */
router.get('/:nick', function(req, res, next) {
  res.send(req.params.nick);
});

module.exports = router;