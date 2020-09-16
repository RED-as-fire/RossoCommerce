import {ActionReducerMap} from '@ngrx/store';
import {authReducer, UserState} from './autenticazione/autenticazione.reducers';

export interface AppState {
  authState: UserState;

}
export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,

};

export const selectUserState = (state: AppState) => state.authState;
