const express = require('express');
const produtoController = require('../controllers/productController');

const router = express.Router();

router.post('/produtos', produtoController.createProduto);
router.get('/produtos', produtoController.getProdutos);
router.get('/produtos/:id', produtoController.getProdutoById);
router.put('/produtos/:id', produtoController.updateProduto);
router.delete('/produtos/:id', produtoController.deleteProduto);

module.exports = router;
