import { EditArticleStateInterface } from '../types/edit-article-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '../ations/update-article.action';
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from '../ations/get-article.action';

const initialState: EditArticleStateInterface = {
  isLoading: false,
  isSubmitting: false,
  article: null,
  validationErrors: null,
};

const updateArticleReducer = createReducer(
  initialState,
  on(updateArticleAction, (state: EditArticleStateInterface) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateArticleSuccessAction, (state: EditArticleStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(
    updateArticleFailureAction,
    (state: EditArticleStateInterface, action) => ({
      ...state,
      validationErrors: action.errors,
    })
  ),
  on(getArticleAction, (state: EditArticleStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state: EditArticleStateInterface, action) => ({
    ...state,
    isLoading: false,
    article: action.article,
  })),
  on(getArticleFailureAction, (state: EditArticleStateInterface, action) => ({
    ...state,
  }))
);

export function reducers(
  state: EditArticleStateInterface,
  action: Action
): EditArticleStateInterface {
  return updateArticleReducer(state, action);
}
