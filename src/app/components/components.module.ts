import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { InicioComponent } from './inicio/inicio.component';
import { PokeComponent } from './poke/poke.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    BootstrapComponent,
    InicioComponent,
    PokeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
