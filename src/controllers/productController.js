const Produto = require('../models/Product');

exports.createProduto = async (req, res) => {
    try {
        const { nome, descricao, preco } = req.body;

        if (!nome || !descricao || !preco) {
            return res.status(400).send({ message: 'Todos os campos são obrigatórios!' });
        }

        const produto = await Produto.create({ nome, descricao, preco });
        res.status(201).send(produto);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).send(produtos);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getProdutoById = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).send({ message: 'Produto não encontrado!' });
        }
        res.status(200).send(produto);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.updateProduto = async (req, res) => {
    try {
        const { nome, descricao, preco } = req.body;
        const produto = await Produto.findByPk(req.params.id);

        if (!produto) {
            return res.status(404).send({ message: 'Produto não encontrado!' });
        }

        if (!nome || !descricao || !preco) {
            return res.status(400).send({ message: 'Todos os campos são obrigatórios!' });
        }

        produto.nome = nome;
        produto.descricao = descricao;
        produto.preco = preco;
        await produto.save();

        res.status(200).send(produto);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).send({ message: 'Produto não encontrado!' });
        }

        await produto.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
