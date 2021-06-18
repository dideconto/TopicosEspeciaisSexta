import { MatTableDataSource } from "@angular/material/table";
import { CicloService } from "./../../../services/ciclo.service";
import { Ciclo } from "../../../models/Ciclo";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Credito } from "src/app/models/Credito";
import { Debito } from "src/app/models/Debito";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  colunasCredito = ["nome", "valor"];
  colunasDebito = ["nome", "valor", "status"];

  data!: string;

  nomeCredito!: string;
  valorCredito!: string;
  creditos = new MatTableDataSource<Credito>();

  nomeDebito!: string;
  valorDebito!: string;
  statusDebito!: string;
  debitos = new MatTableDataSource<Debito>();

  constructor(private service: CicloService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.nomeDebito = "asdasdasdasd";
    // Caso de edição de registro
    // Verificar se existe um id na url
    // Buscar o registro no backend
    // Atribuir para a variável global os valores do objeto que retornou do backend
  }

  cadastrar(): void {
    let ciclo = new Ciclo();
    ciclo.data = new Date(this.data);
    ciclo.creditos = this.creditos.data;
    ciclo.debitos = this.debitos.data;
    this.service.cadastrar(ciclo).subscribe(ciclo => {
      console.log(ciclo);
      this.snack.open("Ciclo de pagamento cadastrado", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }

  adicionarCredito(): void {
    let credito = new Credito();
    credito.nome = this.nomeCredito;
    credito.valor = Number.parseInt(this.valorCredito);
    this.creditos.data.push(credito);
    this.creditos._updateChangeSubscription();
    this.nomeCredito = "";
    this.valorCredito = "";
  }

  adicionarDebito(): void {
    let debito = new Debito();
    debito.nome = this.nomeDebito;
    debito.valor = Number.parseInt(this.valorDebito);
    debito.status = this.statusDebito;
    this.debitos.data.push(debito);
    this.debitos._updateChangeSubscription();
    this.nomeDebito = "";
    this.valorDebito = "";
    this.statusDebito = ""; 
  }
}

// Criar o clique do botão
// Testar o preenchimento dos campos do formulário
// Criar uma classe para armazenar os dados do crédito
// Criar um objeto com os dados do formulário
// Armazenar os objetos dentro de um array
// Colocar as informações do débito dentro do ciclo que será gravado
//no backend
// Mostrar as informações dentro da tabela
