const { clear } = require('console');
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config({ path: 'private/.env' })
const app = express();

app.use(express.static('./public'));

const connection = mysql.createConnection({
    host: process.env._HOST,
    user: process.env._USERNAME,
    password: process.env._PASSWORD,
    database: process.env._DATABASE,
    port: process.env._PORT
})

connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log('Connected to DB ' + process.env._DATABASE);

    }
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/view/index.html'));

})

app.get('/bd', function(req, res) {
    connection.query('SELECT * FROM city', function(err, result) {

        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else {
            console.log(result) //formato json
            res.json(result)
        }
    })

    app.get('/:nome', function(req, res) {
        res.send('Hello ' + req.params.nome);
    })
})



const port = 3001;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
})