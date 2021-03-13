import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { FeedStateInterface } from '../../../shared/modules/feed/store/types/feed-state.interface';
import { CreateArticleStateInterface } from '../types/create-article-state.interface';

export const createArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateArticleStateInterface
>('createArticle');

export const createArticleIsSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState) => createArticleState.isSubmitting
);
export const createArticleErrorSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState) => createArticleState.validationErrors
);
