const express = require('express');
const router = express.Router();
const cards = require('../controllers/card.controller');

router.get('/', cards.getCards);

module.exports = router;
