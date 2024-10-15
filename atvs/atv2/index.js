
const express = require("express");
const router = require("./router/carta.router");

const app = express();

const port = 3000;

app.use(express.json())

app.use("/cartas", router)

app.get("/", (req, res) =>{
    res.send("Home")
})

app.listen(port, () =>{
    console.log(`servidor: https://localhost:${port}`)
})