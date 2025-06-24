const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => 
{
    res.sendFile(__dirname + '/public/index.html');
    console.log()
});

app.get('/home', (req, res) => 
{
    let NAME_FILE = 'home.html'
    let LOCAL = __dirname
    let NEW_LOCAL = LOCAL.replace('/server', '/public/pages/')
    res.sendFile(NEW_LOCAL + NAME_FILE);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Pressione Ctrl+C para parar o servidor`);
});
