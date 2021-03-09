import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { CurrentUserInterface } from '../../../shared/types/current-user';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

export const getCurrentUserOnLoadAction = createAction(
  ActionTypes.GET_CURRENT_USER_ONLOAD
);

export const getCurrentUserSuccessOnLoadAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS_ONLOAD,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureOnLoadAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE_ONLOAD
);
