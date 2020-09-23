import { NgModule } from '@angular/core';

import { PersonalRoutingModule } from './personal-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {PersonalComponent} from './main/personal.component';


@NgModule({
  declarations: [PersonalComponent],
  imports: [
    SharedModule,
    PersonalRoutingModule
  ]
})
export class PersonalizzaModule { }
