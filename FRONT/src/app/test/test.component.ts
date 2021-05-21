import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  texto: string = "";
  contador: number = 0;

  constructor() { 
  }

  incrementarContador(): void{
    this.contador++;
  }

  ngOnInit(): void {
    //Executar alguma código quando o componente for renderizado
    // alert("Não vai utilizar em nenhum momento!");
    // console.log("Testar a sua aplicação pelo console");
  }
  
  mostrarMensagem(): void{
    this.texto = "O texto que eu quero mostrar no HTML";
    // alert("Não vai utilizar em nenhum momento!");
    // console.log("Testar a sua aplicação pelo console");
  }

}
