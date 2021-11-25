const { clear } = require('console');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));



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
})

app.get('/:nome', function(req, res) {
    res.send('Hello ' + req.params.nome);
})



const port = 3002;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
})