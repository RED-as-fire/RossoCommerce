import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticazioneRoutingModule } from './autenticazione-routing.module';
import { AutenticazioneComponent } from './autenticazione.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import {SharedModule} from '../../shared/shared.module';
import {AutenticazioneFacadeService} from './services/autenticazione-facade.service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [AutenticazioneComponent, LoginComponent, RegistrazioneComponent],
  imports: [
    CommonModule,
    AutenticazioneRoutingModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  providers: [AutenticazioneFacadeService]
})
export class AutenticazioneModule { }
