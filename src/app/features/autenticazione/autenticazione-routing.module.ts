import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticazioneComponent } from './autenticazione.component';

const routes: Routes = [{ path: '', component: AutenticazioneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticazioneRoutingModule { }
