import { UserProfileStateInterface } from '../../types/user-profile-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from '../actions/get-user-profile.action';

const initialState: UserProfileStateInterface = {
  isLoading: false,
  data: null,
  errors: null,
};

const getUserProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.data,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);
export function reducers(
  state: UserProfileStateInterface,
  action: Action
): UserProfileStateInterface {
  return getUserProfileReducer(state, action);
}
