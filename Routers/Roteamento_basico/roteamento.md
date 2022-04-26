# Rotas no Express - Node.js - Banco de Dados Postgres

## Node Js - Introdução

### Node JS

O NodeJs é um ambiente de execução javascript em server-side, ou seja, o NodeJS da possibilidade de programar o backend de uma aplicação, totalmente em javascript.

### Express

O Express é um framework pra NodeJS que é utilizado para simplificar a rotina do desenvolvimento de uma API. Com ele é possível gerenciar requisições de diferentes verbos HTTP, integrar com “view engines”, definir configurações comuns da aplicação, adicionar middlewares as requests e muito mais.

## Os métodos HTTP: quais são e para que servem

Quando estamos navegando na web, a todo momento o nosso navegador está enviando requisições para um servidor e o servidor, por sua vez, nos devolve uma resposta em um formato específico ou realiza uma ação de acordo com o que pedirmos para ele fazer.

Nas requisições, especificamos o que chamamos de método HTTP ou verbo. Na versão 1.1 do protocolo HTTP(que é a que todos usamos atualmente) temos 9 verbos diferentes.

### GET

## Introdução as rotas

### Caracteristicas das rotas

- Uma rota é um caminho que será chamado por uma aplicação ou cliente e responderá alguma informação
- Poderá ter uma ou mais funções
- Deve ser única na API

> Por exemplo, uma rota na api chamada /produtos, terá funções para retornar uma lista de produtos. O /produtos é o caminho, a identificação dessa rota

## Básico de Rotas no Express

As rotas são constituídas por 4 partes, são elas a instancia do express, o método de requisição (GET, POST, PUT, DELETE) e a função que será executada:

`app.METHOD(PATH, HANDLER)`

## Sites

- Node JS:

[Contéudo NodeJS](https://programandosolucoes.dev.br/2020/09/18/como-criar-api-nodejs-express/)

- Express e Rotas:

[Contéudo Express](https://programandosolucoes.dev.br/2021/01/26/rotas-express-nodejs/)

- Métodos HTTP

[métodos https](http://gabsferreira.com/os-metodos-http-e-a-diferenca-entre-eles/)
