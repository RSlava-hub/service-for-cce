import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Inject } from '@angular/core';
import { CurrencyEditComponent } from './currency-edit/currency-edit.component';
@Injectable({
  providedIn: 'root'
})
export class CurrencyEditService {

  constructor(
    private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'})
  };
  getData(){
    return this.http.get('/api/currency/current');   
  }

}
