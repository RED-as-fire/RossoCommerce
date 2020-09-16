import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {loginUser} from '../../../redux/autenticazione/autenticazione.actions';

@Injectable({
  providedIn: 'root'
})
export class AutenticazioneFacadeService {

  constructor(private store: Store) { }

  loginFatto(email, password) {
    this.store.dispatch(loginUser({email, password}));
  }
}
