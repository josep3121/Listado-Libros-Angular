import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getCurrencySymbol } from '@angular/common';
import { Cursos } from '../interfaces/cursos.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //URL= 'http://localhost/API';
  constructor(private http: HttpClient) { }

  getcursos(){
     return this.http.get<Cursos[]>('http://localhost:3000/cursos')
   }

   getidcursos(id:string){
    return this.http.get<Cursos>(`http://localhost:3000/cursos/${id}`);
  }
}
