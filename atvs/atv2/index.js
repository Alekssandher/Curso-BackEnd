
//Importa o express e arquivo das rotas
const express = require("express");
const router = require("./router/carta.router");

//Cria uma instancia do express 
const app = express();

//Define a porta do servidor
const port = 3000;

//Faz o express conseguir interpretar json
app.use(express.json())

//Cria a rota base para acessar as outras a partir da /cartas
app.use("/cartas", router)

//Define a rota raiz
app.get("/", (req, res) =>{
    res.send("Home")
})

//Inicia o servidor
app.listen(port, () =>{
    console.log(`servidor: https://localhost:${port}`)
})