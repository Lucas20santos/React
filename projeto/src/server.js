const express = require('express');
const todosRoutes = require('./rotas.routes'); 
const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get('/', (req, res) => {
    return res.json("up")
});

app.listen(3333, () => {
    console.log("Server Running");
});
