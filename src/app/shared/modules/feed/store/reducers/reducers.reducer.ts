import { Action, createReducer, on } from '@ngrx/store';

import { FeedStateInterface } from '../types/feed-state.interface';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from '../actions/get-feed.actions';
import { routerNavigationAction } from '@ngrx/router-store';

export const reducersFeatureKey = 'reducers';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state: FeedStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedSuccessAction, (state: FeedStateInterface, action) => ({
    ...state,
    data: action.feed,
    isLoading: false,
  })),
  on(getFeedFailureAction, (state: FeedStateInterface) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, () => initialState)
);

export function reducers(
  state: FeedStateInterface,
  action: Action
): FeedStateInterface {
  return feedReducer(state, action);
}
