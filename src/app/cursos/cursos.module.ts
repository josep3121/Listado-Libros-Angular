import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { CursoTarjetaComponent } from './components/curso-tarjeta/curso-tarjeta.component';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    DetalleComponent,
    HomeComponent,
    ListadoComponent,
    CursoTarjetaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    CursosRoutingModule
    
  ]
})
export class CursosModule { }
