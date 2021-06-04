import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ciclo } from "../models/Ciclo";

@Injectable({
  providedIn: "root",
})
export class CicloService {

  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listar(): Observable<Ciclo[]> {
    return this.http.get<Ciclo[]>(`${this.baseURL}ciclo/listar/`);
  }

  cadastrar(ciclo: Ciclo): Observable<Ciclo> {
    return this.http.post<Ciclo>(`${this.baseURL}ciclo/cadastrar/`, ciclo);
  }
}
