const { clear } = require('console');
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config({ path: '/private/.env' })
const app = express();

app.use(express.static('./public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/view/index.html'));
})

app.get('/:nome', function(req, res) {
    res.send('Hello ' + req.params.nome);
})

const port = 3001;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
})