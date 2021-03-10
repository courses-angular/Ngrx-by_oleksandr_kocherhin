import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../../types/app-state.interface';
import { FeedStateInterface } from '../types/feed-state.interface';

export const feedFeatureFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>('feed');

export const feedDataSelector = createSelector(
  feedFeatureFeatureSelector,
  (authState) => authState.data
);
export const feedErrorSelector = createSelector(
  feedFeatureFeatureSelector,
  (authState) => authState.error
);

export const isFeedLoadingSelector = createSelector(
  feedFeatureFeatureSelector,
  (feed) => feed.isLoading
);
