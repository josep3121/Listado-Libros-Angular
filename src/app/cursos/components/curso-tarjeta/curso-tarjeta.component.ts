import { Component, Input,  } from '@angular/core';
import { Cursos } from '../../interfaces/cursos.interfaces';

@Component({
  selector: 'app-curso-tarjeta',
  templateUrl: './curso-tarjeta.component.html',
  
})
export class CursoTarjetaComponent  {
 
 @Input() Curul!: Cursos;
}
