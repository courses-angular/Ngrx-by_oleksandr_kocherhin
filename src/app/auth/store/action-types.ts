export enum ActionTypes {
  REGISTER_SUBMIT = '[Auth] Register submit',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN_SUBMIT = '[Auth] Login submit',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  GET_CURRENT_USER_ONLOAD = '[Auth] Get current user onload ',
  GET_CURRENT_USER_SUCCESS_ONLOAD = '[Auth] Get current user success onload ',
  GET_CURRENT_USER_FAILURE_ONLOAD = '[Auth] Get current user failure onload',

  UPDATE_CURRENT_USER = '[Auth] Update current user',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update current user success',
  UPDATE_CURRENT_USER_FAILURE = '[Auth] Update current user failure',

  LOGOUT = '[Auth] Logout user',
}
