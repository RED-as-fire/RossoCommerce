import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarrelloComponent} from './main/carrello.component';

const routes: Routes = [
  { path: '', component: CarrelloComponent, children: [
      {path: 'detail', component: CarrelloComponent},
      {path: 'edit', component: CarrelloComponent},
      {path: 'add', component: CarrelloComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrelloRoutingModule { }
