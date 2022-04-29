const express = require('express');
const app = express();
const port = 3300;

const obj = {nome: ['lucas', 'maria', 'joana'], idade: [12, 13, 12]}

// primeira rota
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/dados', (req, res) => {
    res.send('Aló mundo!')
    console.log(req.body);
    console.log(req.url.split('?')[1].split('&'));
});

// subindo o servidor
app.listen(port, () => {
    console.log(`Exemplo app node rodando no endereço http://localhost:${port} `);
});
