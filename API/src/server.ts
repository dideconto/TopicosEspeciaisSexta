import express from "express";
import { Request, Response } from "express";
const app = express();

console.clear();

//Métodos HTTP ->
//GET  -> Solicita um determinado recurso do servidor
//POST -> Envia um recurso para o servidor

app.get("/", (request: Request, response: Response) => {
  response.send("Hello World com ts-node-dev!");
});

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});
