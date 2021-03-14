import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EditArticleStateInterface } from '../types/edit-article-state.interface';
import { AppStateInterface } from '../../../../shared/types/app-state.interface';

export const editArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface
>('editArticle');

export const IsSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState) => editArticleState.isSubmitting
);

export const IsLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState) => editArticleState.isLoading
);
export const ErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState) => editArticleState.validationErrors
);
export const ArticleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState) => editArticleState.article
);
