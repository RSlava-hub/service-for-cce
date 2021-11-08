import { Component } from '@angular/core';
import { MainPageService } from './main-page.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-for-cce';
  url: any;
  constructor(private itemService: MainPageService){}

  ngOnInit(): void {
    this.getCurrencyCourse();
  }
  
  getCurrencyCourse(){
    this.itemService.getapi()
  }
}
