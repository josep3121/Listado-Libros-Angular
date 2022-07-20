import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Cursos } from '../../interfaces/cursos.interfaces';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
      curso: Cursos[]=[];
     
  constructor(private CursosService:CursosService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.CursosService.getcursos().subscribe(curso=>{
      this.curso=curso;

      
    });
  }

}
