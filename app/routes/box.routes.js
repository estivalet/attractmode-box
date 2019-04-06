var express = require('express');
var router = express.Router();
var box = require('../controllers/box.controller.js');

// main route shows all attract mode main categories
router.get('/', box.index);

// get systems in selected category
router.get('/systems/:category', box.getSystemsInCategory);

// get games in selected system
router.get('/games/:system', box.getGamesInSystem);


module.exports = router;