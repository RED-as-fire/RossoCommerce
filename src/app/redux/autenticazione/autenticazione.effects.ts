import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {HttpCommunicationsService} from '../../core/http-communications/http-communications.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {loginUser, loginUserFailure, loginUserSuccess, initUser} from './autenticazione.actions';
import {User} from '../../core/models/user.interface';


@Injectable()

// tslint:disable-next-line:class-name
export class autenticazioneEffects {

  constructor(private action$: Actions,
              private http: HttpCommunicationsService,
              private store: Store,
              private router: Router) {
  }
  loginUser$ = createEffect(() => this.action$.pipe(
    ofType(loginUser),
    switchMap(action => this.retreiveAllUsers().pipe(
      switchMap(users => of(this.checkUserAccount(action.email, action.password, users)).pipe(
        map( user => {
          if (typeof user === 'undefined') {
            return loginUserFailure({error: 'email e/o password non corretta'});
          } else {
            return loginUserSuccess({user});
          }
        })
      ))
    ))
  ));
  loginUserSuccess$ = createEffect(() => this.action$.pipe(
    ofType(loginUserSuccess),
    tap(action => {
      console.log('salvo utente in sessione da auth.effects');
      // tslint:disable-next-line:max-line-length
      sessionStorage.setItem('utente', JSON.stringify({email: action.user.email, id: action.user.id}));
    }),
    map( (action) => initUser({ user: action.user })),
    tap(() => this.router.navigateByUrl('/home'))
  ));

  retreiveAllUsers(): Observable<User[]> {
    return this.http.retrieveGetCall<User[]>('users');
  }
  checkUserAccount(email: string, password: string, users) {
    return users.find(actualUser => actualUser.email === email && actualUser.password === password);
  }
}




