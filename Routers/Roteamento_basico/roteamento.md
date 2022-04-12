# Roteamento Básico

O roteamento refere-se à determinação de como um aplicativo responde a uma solicitação do cliente por um endpoint específico, que é uma URI(ou caminho) e um método de solicitação HTTP específico (GET, POST, e assim por diante).

## Exemplo

`const app = express()

app.get('/', (req, res) =>
{
    app.send('Hello World')})`

* app é uma instancia do express
* Get é um método HTTP... poderia ser outros
* '/' um caminho no servidor
* função anonima é execultada quando a rota é correspondida
