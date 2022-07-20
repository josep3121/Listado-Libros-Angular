import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes=[
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path:'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m=> m.CursosModule)
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'',
    component:ErrorPageComponent
    //redirectTo:'login'
  }
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
