import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {CarrelloComponent} from './main/carrello.component';
import {CarrelloRoutingModule} from './carrello-routing.module';
import { IndirizzoComponent } from './indirizzo/indirizzo.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ModificaComponent } from './modifica/modifica.component';



@NgModule({
  declarations: [CarrelloComponent, IndirizzoComponent, DettaglioComponent, ModificaComponent],
  imports: [
    SharedModule,
    CarrelloRoutingModule
  ]
})
export class CarrelloModule { }
