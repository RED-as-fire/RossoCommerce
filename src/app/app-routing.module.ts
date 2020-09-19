import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './features/home/home.component';


// tslint:disable-next-line:max-line-length
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./features/autenticazione/autenticazione.module').then(m => m.AutenticazioneModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
