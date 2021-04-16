import { Request, Response } from "express";
import CicloSchema from "../models/CicloSchema";

class CicloController {
  listar(request: Request, response: Response) {
    const objeto = {
      atribTexto: "Uma string qualquer",
      atribNumero: 123.54,
      atribLogico: false,
      atribObjeto: {
        atribVetor: ["Opção1", "Opção 2"],
        atributo: {
          atribVetor: ["Opção1", "Opção 2"],
          atributo: "123123",
        },
      },
    };
    response.json(objeto);
  }

  buscarPorId(request: Request, response: Response) {
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
  }

  cadastrar(request: Request, response: Response) {
    const objeto = request.body;
    CicloSchema.create(objeto);
    console.log(objeto);
    response.json(objeto);
  }
}

export { CicloController };
