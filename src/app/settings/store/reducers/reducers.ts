import { SettingsStateInterface } from '../types/settings-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../../../auth/store/actions/update-current-user.action';

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducer = createReducer(
  initialState,
  on(updateCurrentUserAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateCurrentUserSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
  })),
  on(updateCurrentUserFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
);

export function reducers(
  state: SettingsStateInterface,
  action: Action
): SettingsStateInterface {
  return settingsReducer(state, action);
}
