console.clear();

import express from "express";
import { mongoose } from "./config/database";
import { router } from "./config/routes";

const app = express();
const db = mongoose;

app.use(express.json());
app.use(router);

app.listen(1234, () => {
  console.log("Servidor rodando...");
});
