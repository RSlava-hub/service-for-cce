import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainPageService } from '../main-page.service';

@Component({
  selector: 'app-set-conf',
  templateUrl: './set-conf.component.html',
  styleUrls: ['./set-conf.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SetConfComponent implements OnInit {
  curr_id = -1;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private http: HttpClient, 
    private itemService: MainPageService) 
    { }

    ngOnInit(): void {
      this.addCurr();
    }
  
    addCurr(){
      this.curr_id++;
      let newdiv = document.createElement("div");
      newdiv.className = 'currency-file-formation';
      newdiv.id = 'currency';
      newdiv.dataset.currency = this.curr_id.toString();
      let elemid = document.querySelector('#currencies');
      newdiv.innerHTML = `
        <input type='text' class='input code' placeholder='Название валюты'>
        <div class="headers"><span class='value'>Диапазон</span><span class='buy'>Покупка</span><span class='sell'>Продажа</span></div>
        <div class="container-course"></div>
        `;
      let btnAdd = document.createElement('button');
      btnAdd.classList.add('btn','add-course');
      btnAdd.dataset.course = this.curr_id.toString();
      btnAdd.onclick = (e)=>{
        let ehtml = (e.target as HTMLElement);
        this.addCourse(ehtml.dataset.course!)
      };
      let btnDelete = document.createElement('button');
      btnDelete.classList.add('btn','btn-delete');
      btnDelete.dataset.course = this.curr_id.toString();
      btnDelete.onclick = (e)=>{
        let ehtml = (e.target as HTMLElement);
        this.deleteCurrency(ehtml.dataset.course!)
      };
      let buttons = document.createElement("div");
      buttons.classList.add('container-buttons')
      buttons.appendChild(btnDelete).innerText = 'Удалить валюту';
      buttons.appendChild(btnAdd).innerText = 'Добавить курс';
      newdiv.appendChild(buttons);
      elemid!.appendChild(newdiv);
      this.addCourse(this.curr_id.toString())
      return false;
    }
  
  
  
    deleteCurrency(id:string){
      let currency = document.querySelector(`#currency[data-currency='${id}']`);
      currency!.remove();
    }
  
    addCourse(id:string){
      let container = document.querySelector(`*[data-currency='${id}'] .container-course`);
      if(container){
        let div = document.createElement('div');
        let range = document.createElement("input");
        range.classList.add('input')
        div.appendChild(range);
        let buy = document.createElement("input");
        buy.classList.add('input')
        div.appendChild(buy);
        let sell = document.createElement("input");
        sell.classList.add('input')
        div.appendChild(sell);
        let btn = document.createElement('button');
        btn.classList.add('btn-delete-input');
        btn.innerText = 'Х'
        btn.onclick = (e)=>{
          let ehtml = (e.target as HTMLElement);
          ehtml.parentElement!.remove();
        }
        div.appendChild(btn);
        container.appendChild(div);
    }
    }
  
    postCurrs(){
      let jsonData = {
        "currency": {
           "departments": [
             {
              "departmentId": 1,
              "startDate": new Date().getTime(),
              "currencies": []
             }
           ]
        }
     }
     document.querySelectorAll('*[data-currency]').forEach((curr) => {
      let currency = (curr as HTMLElement);
      let code = (<HTMLInputElement>currency.querySelector('.code')).value;
      let json:object[] = jsonData.currency.departments[0].currencies;
      json.push({code});
      currency.querySelectorAll('.container-course div').forEach((a)=>{
        let value = (<HTMLInputElement>a.querySelectorAll('input')[0]).value;
        let buy = (<HTMLInputElement>a.querySelectorAll('input')[1]).value;
        let sell = (<HTMLInputElement>a.querySelectorAll('input')[2]).value;
        if(value !== ''){
          let obj1: {[k: string]: any} = json[json.length-1];
          if(!obj1.buy){
            obj1.buy = [{text: buy, value: value}]
          }else{
            obj1.buy.push({text: buy, value: value})
          }
          if(!obj1.sell){
            obj1.sell = [{text: sell, value: value}]
          }else{
            obj1.sell.push({text: sell, value: value})
          }
        }
      })
    })
    let api = this.itemService.getapi();
    let bodyString = JSON.stringify(jsonData);
    this.http.post(`${api}/api/currency`, bodyString, this.httpOptions).subscribe();
    }
  }
  
