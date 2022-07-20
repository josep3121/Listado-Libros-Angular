import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from '../../interfaces/cursos.interfaces';
import { CursosService } from '../../services/cursos.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  cursor!:Cursos;
  constructor(private CursosService:CursosService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({ id })=> this.CursosService.getidcursos(id))
    ).subscribe(cursor=>this.cursor=cursor);
  }

}
