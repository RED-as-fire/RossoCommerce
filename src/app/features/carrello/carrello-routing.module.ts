import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarrelloComponent} from './main/carrello.component';
import {IndirizzoComponent} from './indirizzo/indirizzo.component';
import {DettaglioComponent} from './dettaglio/dettaglio.component';
import {ModificaComponent} from './modifica/modifica.component';

const routes: Routes = [
  { path: '', component: CarrelloComponent, children: [
      {path: 'detail', component: DettaglioComponent},
      {path: 'address', component: IndirizzoComponent},
      {path: 'edit', component: ModificaComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrelloRoutingModule { }
