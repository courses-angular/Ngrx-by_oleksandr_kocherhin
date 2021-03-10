import { PopularTagsStateInterface } from './popular-tags-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../store/actions/get-popular-tags.action';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  data: null,
  errors: null,
};

export const reducersFeatureKey = 'popularTags';

export const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state: PopularTagsStateInterface) => ({
    ...state,
    isLoading: true,
    errors: null,
  })),
  on(
    getPopularTagsSuccessAction,
    (state: PopularTagsStateInterface, action) => ({
      ...state,
      data: action.tags,
      isLoading: false,
    })
  ),
  on(getPopularTagsFailureAction, (state: PopularTagsStateInterface) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, () => initialState)
);

export function reducers(
  state: PopularTagsStateInterface,
  action: Action
): PopularTagsStateInterface {
  return popularTagsReducer(state, action);
}
