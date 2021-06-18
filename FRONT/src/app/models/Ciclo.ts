import { Credito } from "./Credito";
import { Debito } from "./Debito";

export class Ciclo {
  _id?: string;
  data!: Date;
  creditos!: Credito[];
  debitos!: Debito[];
  createdAt?: Date;
  updatedAt?: Date;
}
