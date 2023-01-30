const saluta = require('./utils');
const people = require('./persone');

saluta('a tutti');
saluta(people.persona1);
saluta(people.persona2);

const express = require('express');
const app = express();
const port = 3000;

//MIDDLEWARE
app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

const oggetto = {
    array: [
        {
            nome: 'pane',
            prezzo: 2
        },
        {
            nome: 'pizza',
            prezzo: 3
        }
    ]
}

app.get('/json', (req, res) => {
    if (oggetto) {
        res.json(oggetto);
    } else {
        res.status(500).json({ error: 'message' });
    }
})

const colori = require('./colors.json');

app.get('/colors', (req, res) => {
    if (colori) {
        res.json(colori);
    } else {
        res.status(500).json({ error: 'json error' });
    }
})



app.all('*', (req, res) => {
    res.send('<h1>Risorsa non trovata!</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

//console.log('__dirname: ', __dirname);
//console.log('__filename: ', __filename);

//console.log('module: ', module);

//console.log('process: ', process);
