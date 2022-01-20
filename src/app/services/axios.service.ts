import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  private url : string = "https://pokeapi.co/api/v2";
  private urlType : string = "https://pokeapi.co/api/v2/type/"; 

  constructor(private httpClient : HttpClient) { }

  //Este metodo nos sirve para obtener todos los pokemons
  getAll(id){
    return this.httpClient.get(`${this.url}/pokemon/${id}`);
  }

  //Este metodo nos sirve para filtrar por tipo de pokemon
  getTypes(){
    return this.httpClient.get(`${this.urlType}`);
  }
}
