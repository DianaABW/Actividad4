import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  URL_BASE:string ='https://pokeapi.co/api/v2/';
  private header=new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content_Tye', 'application/json; charset=utf-8')
  private options={
    headers: this.header
  }
  constructor(private http:HttpClient) { }

  getDataPoke(endPoint:string){
    return this.http.get(this.URL_BASE+endPoint, this.options);
  }
}
