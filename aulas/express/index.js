
const express = require("express");
const empresa = require("./router/empresa.router");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/empresa", empresa);

app.get("/", (req, res) => {
    res.send("Hello world")
});

app.get("/contato", (req, res) => {
    res.send("contato p")
});

app.listen(port, () => {
    console.log(`Servidor https://localhost:${port}`)
});