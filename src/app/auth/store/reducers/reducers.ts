import { AuthStateInterface } from '../../types/auth-state.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '../actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

// tslint:disable-next-line:typedef
export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
