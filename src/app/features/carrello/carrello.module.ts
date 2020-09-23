import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {CarrelloComponent} from './main/carrello.component';
import {CarrelloRoutingModule} from './carrello-routing.module';



@NgModule({
  declarations: [CarrelloComponent],
  imports: [
    SharedModule,
    CarrelloRoutingModule
  ]
})
export class CarrelloModule { }
