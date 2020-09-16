import {createAction, props} from '@ngrx/store';
import {User} from '../../core/models/user.interface';

export const initUser  = createAction('[User] init',  props<{user: User}>());
export const loginUser = createAction('[Auth] Login',  props<{email: string, password: string}>());
export const loginUserSuccess = createAction('[Auth] Login Success', props<{user: User}>());
export const loginUserFailure = createAction('[Auth] Login Failure', props<{error: string}>());
