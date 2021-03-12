import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleStateInterface } from '../types/article-state.interface';
import { AppStateInterface } from '../../../shared/types/app-state.interface';

export const articleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('article');

export const articleDataSelector = createSelector(
  articleFeatureSelector,
  (articleState) => articleState.data
);
export const articleErrorSelector = createSelector(
  articleFeatureSelector,
  (articleState) => articleState.errors
);

export const articleIsLoadingSelector = createSelector(
  articleFeatureSelector,
  (feed) => feed.isLoading
);
