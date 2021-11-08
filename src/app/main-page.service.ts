import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  api!: string;
  constructor(private http: HttpClient) { }
  getapi(){
    let currencyCourse = (<HTMLInputElement>document.querySelector('.select-cce')).value;
    this.api = `${currencyCourse}/api/currency/current`;
    return currencyCourse
  }
  getData(){
    return this.http.get(this.api)  
  }
  
}

