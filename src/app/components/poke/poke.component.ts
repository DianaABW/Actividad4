import { Component } from '@angular/core';
import { PokemonsService } from 'src/app/service/pokemons.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent {
  datos:any;
  poke:any=[];
  constructor(private consume:PokemonsService){}
  getPokes():void{
    this.consume.getDataPoke('pokemon').subscribe(
      {
        next:(data)=>{
          this.datos=data;
          for(const i in this.datos.results){
            this.poke.push (this.datos.results [i] );
          }
          console.log (this.poke);
        },
        error: () => console.log("Error en la peticion"),
        complete:() => ("Se ha completado la peticion")
      }
    );
  }
  ngOnInit():void {
    this.getPokes();
  }
}
//Agregar capacitor