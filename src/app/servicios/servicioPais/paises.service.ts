import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  _url = "https://restcountries.com/v3.1/";
  constructor(public http:HttpClient) { }

  getAllCountries(){
    let header = new HttpHeaders().set('Type-Content','aplication/json');
    return this.http.get(this._url + "all",{
      headers:header,
    });
  }

  getOneCountrie(name:string)
  {
    let header = new HttpHeaders().set('Type-Content','aplication/json');
    return this.http.get(this._url+name,{
      headers:header,
    });
  }
}


