const express = require('express')

const allTodos = [{name: "lucas", status: false}];
const todasRoutes = express.Router()

// c
todasRoutes.post('/todos', (request, response) => 
{
    const { name } = request.body;
    allTodos.push({name, status: false})
    return response.status(201).json(allTodos)
});

todasRoutes.get('/todos', (request, response) => 
{
    return response.status(200).json(allTodos)
});

module.exports = todasRoutes;
