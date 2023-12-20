import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokeComponent } from './components/poke/poke.component';

const routes: Routes = [
  {
    path:'bootstrap',
    component:BootstrapComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'pokem',
    component:PokeComponent
  },
  {
    path:'**',
    pathMatch:'full', redirectTo:'inicio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
