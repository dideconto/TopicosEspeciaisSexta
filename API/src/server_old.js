const express = require("express");
const app = express();

console.clear();

//Métodos HTTP -> 
//GET  -> Solicita um determinado recurso do servidor
//POST -> Envia um recurso para o servidor

app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});