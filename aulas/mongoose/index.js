const mongoose = require('mongoose')
const express = require("express");
const empresa = require("./router/empresa.router");
const connectToDatabase = require("./database/database")

const app = express();
const port = 3000;



app.use(express.json());
app.use("/empresa", empresa);

mongoose.connect('mongodb://localhost:27017/Empresa')

app.get("/", (req, res) => {
    res.send("Hello world")
});

app.get("/contato", (req, res) => {
    res.send("contato p")
});

// app.get("/mongo", (req, res) => {
//     connectToDatabase(res)
// })

app.listen(port, () => {
    console.log(`Servidor https://localhost:${port}`)
});

