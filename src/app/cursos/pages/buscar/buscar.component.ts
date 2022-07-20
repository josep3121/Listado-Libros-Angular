import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Cursos } from '../../interfaces/cursos.interfaces';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  curso: Cursos[]=[];
  constructor(private CursosService:CursosService) { }

  ngOnInit(): void {
    this.CursosService.getcursos().subscribe(curso=>{
      this.curso=curso});
  }

}
