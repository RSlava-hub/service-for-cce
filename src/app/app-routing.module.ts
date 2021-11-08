import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CurrencyEditComponent } from './currency-edit/currency-edit.component';
import { SetConfComponent } from './set-conf/set-conf.component';

const routes: Routes =[
  {path: 'main', component: MainPageComponent},
  {path: 'curedit', component: CurrencyEditComponent},
  {path: 'setconf', component: SetConfComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
