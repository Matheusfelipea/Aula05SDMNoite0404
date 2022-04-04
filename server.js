const config = require ("config");
const express = require("express");
const bodryparser = require("body-parser");
console.log("Abrindo meu servidor ");

let port = config.get("server.port");

//console.log("porta:", porta);

const app = express();

app.listen(port, function() {
    console.log (`Servidor rodando na porta ${port}`)
});
