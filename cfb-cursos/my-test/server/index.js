const express =  require('express');
const app = express();
const PORT  = 3001;

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"})
});

app.post("/api", (req, res) => 
{
    console.log(req.url);
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});
