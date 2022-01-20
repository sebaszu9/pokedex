import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../services/axios.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: any = [];
  tipos: any = [];
  pokemonsBack: any = [];

  constructor(private axiosService : AxiosService) { }

  ngOnInit(): void {
    this.obtenerPokemons();
    this.obtenerType();
  }

  private obtenerPokemons(){
    for (let i = 1; i < 150; i++) {
      this.axiosService.getAll(i).subscribe((datos:any) => {
        //console.log(datos);
        this.pokemons.push(datos)
        this.pokemonsBack.push(datos)
        //this.pokemons = datos.results;
      });
      
    }
  }

  private obtenerType(){
    this.axiosService.getTypes().subscribe((datosType: any) => {
      this.tipos = datosType.results;
    })
  }

  filter(value){
    let isTypesPokemons = [];
    this.pokemonsBack.map((dataType: any) => {
      dataType.types.map((data: any) => {
        if(data.type.name == value){
          isTypesPokemons.push(dataType);
        }
      });
    });
    this.pokemons = isTypesPokemons;

  }

}
