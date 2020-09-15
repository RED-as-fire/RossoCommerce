import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// tslint:disable-next-line:max-line-length
const routes: Routes = [{ path: 'auth', loadChildren: () => import('./features/autenticazione/autenticazione.module').then(m => m.AutenticazioneModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
