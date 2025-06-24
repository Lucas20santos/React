const express = require('express');
const path = require('path');

let NAME_FILE = 'home.html'
let LOCAL = __dirname
let NEW_LOCAL = LOCAL.replace('/server', '/public/')


const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => 
{
    res.sendFile(NEW_LOCAL + 'index.html');
});

app.get('/home', (req, res) => 
{
    res.sendFile(NEW_LOCAL + NAME_FILE);
});

app.post('/login', (req, res) => 
{
    const emailRecebido = req.body.email;
    const senhaRecebida = req.body.password;

    console.log("Dados recebidos do login: ");
    console.log("Email: ", emailRecebido);
    console.log("Senha: ", senhaRecebida);

    res.sendFile(NEW_LOCAL + "pages/home.html");
});

app.listen(PORT, () => 
{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Pressione Ctrl+C para parar o servidor`);
});
