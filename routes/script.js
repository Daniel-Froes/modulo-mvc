const express = require('express')
const router = express.Router();
const CarrinhoController = require('../controllers/carrinhoController')

router.get('/:item', CarrinhoController.addItem)

module.exports = router