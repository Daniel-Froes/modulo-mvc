let express = require('express')
let router = express.Router();
let CarrinhoController = require('../controllers/_completar_')

router.get('/_completar_',_completar_)


module.exports = CarrinhoController