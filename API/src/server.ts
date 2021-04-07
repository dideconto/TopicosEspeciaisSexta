import express, { Request, Response } from "express";
const app = express();

console.clear();

app.use(express.json());
//Métodos HTTP ->
//GET  -> Solicita um determinado recurso do servidor
//POST -> Envia um recurso para o servidor

app.get("/", (request: Request, response: Response) => {
  response.send("<h1>Hello World com ts-node-dev!</h1>");
});

app.get("/ciclo/listar", (request: Request, response: Response) => {
  const objeto = {
    atribTexto: "Uma string qualquer",
    atribNumero: 123.54,
    atribLogico: false,
    atribObjeto: {
      atribVetor: ["Opção1", "Opção 2"],
    },
  };
  response.json(objeto);
});

app.get("/ciclo/listar/:param1/:param2", (request: Request, response: Response) => {
  const { param1, param2 } = request.params;
  const objeto = {
    p1: param1,
    p2: param2,
    atribTexto: "Uma string qualquer",
    atribNumero: 123.54,
    atribLogico: false,
    atribObjeto: {
      atribVetor: ["Opção1", "Opção 2"],
    },
  };
  response.json(objeto);
});

app.post("/usuario/cadastrar", (request: Request, response: Response) => {
  console.log(request.body);
  response.json("Criamos uma funcionalidade para receber dados!");
});

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});
