'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();


//Conecta ao banco
mongoose.connect('mongodb://balta:teste123@ds012889.mlab.com:12889/ndstr1')
    .then(res => console.log(res.body))
    .catch(FUDEU => console.log(FUDEU))

//Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('/products', productRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Rodando na porta ${PORT}`);
});

module.exports = app;