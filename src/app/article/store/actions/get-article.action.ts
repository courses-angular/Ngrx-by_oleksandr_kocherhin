import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../types/action-types';
import { GetArticleResponseInterface } from '../../../shared/types/get-article-response.interface';
import { ArticleInterface } from '../../../shared/types/article-interface';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
