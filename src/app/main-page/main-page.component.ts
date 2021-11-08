import { Component, OnInit } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient} from '@angular/common/http';
import {MainPageService} from '../main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  items: any;
  constructor(
    private http: HttpClient, 
    private itemService: MainPageService) { }

  ngOnInit(): void {
    this.showData();

  }
  showData() {
    let data = this.itemService.getData();
    data.subscribe(res => {
      this.items = res;
    });
  }
}