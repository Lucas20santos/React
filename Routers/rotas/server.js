const express = require('express');
const app = express();
const port = 3300;

const obj = {nome: ['lucas', 'maria', 'joana'], idade: [12, 13, 12]}

// primeira rota
app.get('/', (req, res) => {
    res.json(obj)
});

// subindo o servidor
app.listen(port, () => {
    console.log(`Exemplo app node rodando no endereço http://localhost:${port} `);
});
