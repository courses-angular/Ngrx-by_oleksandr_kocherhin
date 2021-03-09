import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../../types/app-state.interface';
import { FeedStateInterface } from '../types/feed-state.interface';

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>('feed');

export const isFeedLoadingSelector = createSelector(
  feedFeatureSelector,
  (authState) => authState.isLoading
);
export const feedErrorSelector = createSelector(
  feedFeatureSelector,
  (authState) => authState.error
);

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (feed) => feed.data
);
