import { CreateArticleStateInterface } from '../types/create-article-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  createArticleAction,
  createArticleSuccessAction,
  createArticleFailureAction,
} from '../actions/create-article.action';
import { FeedStateInterface } from '../../../shared/modules/feed/store/types/feed-state.interface';
import { feedReducer } from '../../../shared/modules/feed/store/reducers/reducers.reducer';
import { ArticleInterface } from '../../../shared/types/article-interface';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleSuccessAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(
    createArticleFailureAction,
    (state: CreateArticleStateInterface, action) => ({
      ...state,
      validationErrors: action.errors,
    })
  )
);

export function reducers(
  state: CreateArticleStateInterface,
  action: Action
): CreateArticleStateInterface {
  return createArticleReducer(state, action);
}
