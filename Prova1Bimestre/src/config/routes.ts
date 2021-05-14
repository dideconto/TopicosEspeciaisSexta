import { Router } from "express";
import { PessoaController } from "../controllers/PessoaController";

const router = Router();
const pessoaController = new PessoaController();

router.post("/pessoa/cadastrar", pessoaController.cadastrar);
router.get("/pessoa/buscar/:cpf", pessoaController.buscarPorCpf);
router.get("/pessoa/listar", pessoaController.listar);
router.put("/pessoa/alterar", pessoaController.alterar);
router.delete("/pessoa/remover/:cpf", pessoaController.remover);

export { router };