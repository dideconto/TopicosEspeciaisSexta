import { model, Schema } from "mongoose";

const pessoaSchema = new Schema(
  {
    nome: {
      type: String, 
      required: [true, "O campo NOME é obrigatório"],
    },
    cpf: {
      type: String,
      required: [true, "O campo CPF é obrigatório"],
      unique:true
    },
    idade: {
      type: Number,
      required: [true, "O campo IDADE é obrigatório"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("pessoas", pessoaSchema);
