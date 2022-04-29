const http = require('http');

http.createServer((req, res) => {
    res.end('Olá Mundo!!!')
}).listen(3030);

console.log("O servidor está criado rodando")


