import { Request, Response } from "express";
import PessoaSchema from "../models/PessoaSchema";

class PessoaController {
  async cadastrar(request: Request, response: Response) {
    try {
      const { cpf } = request.body;
      if (await PessoaSchema.exists({ cpf })) {
        response.status(400).json({ msg: "CPF duplicado pelo código" });
      } else {
        const novaPessoa = await PessoaSchema.create(request.body);
        response.status(201).json(novaPessoa);
      }
    } catch {
      response.status(400).json({ msg: "CPF duplicado" });
    }
  }

  async buscarPorCpf(request: Request, response: Response) {
    const { cpf } = request.params;
    response.status(200).json(await PessoaSchema.findOne({ cpf }));
  }

  async listar(request: Request, response: Response) {
    response.status(200).json(await PessoaSchema.find());
  }

  async remover(request: Request, response: Response) {
    const { cpf } = request.params;
    response.status(200).json(await PessoaSchema.remove({ cpf }));
  }

  async alterar(request: Request, response: Response) {
    const { cpf } = request.body;
    const pessoaAlterada = request.body;
    response.status(200).json(await PessoaSchema.updateOne({ cpf }, pessoaAlterada));
  }
}

export { PessoaController };
