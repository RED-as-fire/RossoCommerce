import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './features/home/main/home.component';
import { NotfoundComponent } from './features/notfound/main/notfound.component';


// tslint:disable-next-line:max-line-length
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./features/autenticazione/autenticazione.module').then(m => m.AutenticazioneModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'personal', loadChildren: () => import('./features/personal/personal.module').then(m => m.PersonalModule) },
  { path: 'cart', loadChildren: () => import('./features/carrello/carrello.module').then(m => m.CarrelloModule)},
  {path: '**', loadChildren: () => import('./features/notfound/notfound.module').then(m => m.NotfoundModule)},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
