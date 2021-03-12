import { Action, createReducer, on } from '@ngrx/store';
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from '../actions/get-article.action';

import { ArticleStateInterface } from '../types/article-state.interface';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: ArticleStateInterface = {
  isLoading: false,
  errors: null,
  data: null,
};

export const articleReducer = createReducer(
  initialState,
  on(getArticleAction, (state: ArticleStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state: ArticleStateInterface, action) => ({
    ...state,
    data: action.article,
    isLoading: false,
  })),
  on(getArticleFailureAction, (state: ArticleStateInterface) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigatedAction, (): ArticleStateInterface => initialState)
);

export function reducers(
  state: ArticleStateInterface,
  action: Action
): ArticleStateInterface {
  return articleReducer(state, action);
}
