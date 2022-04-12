// Exemplo Hello World

const express = require('express')
const app = express()
const port = 3000

// o aplicativo vai responder com, usando o 
// parâmetro res, para emitir uma mensagem básica
app.get('/', (req, res) => 
{
    res.sendFile(__dirname + '/index.html');
});

// inicio do servidor e fica ouvindo a porta 3000
app.listen(port, () => 
{
    console.log(`Running in Port: ${port}`);
});
