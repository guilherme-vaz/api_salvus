const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', produtoRoutes);
app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Produtos!');
});

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(err => {
    console.log('Erro ao conectar ao banco de dados:', err);
});
