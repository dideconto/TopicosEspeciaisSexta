import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ciclo } from "src/app/models/Ciclo";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {

  ciclos : Ciclo[] = [];

  constructor(private http: HttpClient) {
    //Observable<Ciclo[]>
    http.get<Ciclo[]>("http://localhost:3000/ciclo/listar/").subscribe((ciclos) => {      
      this.ciclos = ciclos;
    });
  }

  ngOnInit(): void {}
}
