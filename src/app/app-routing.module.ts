import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'quem-somos',
    component: QuemSomosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
