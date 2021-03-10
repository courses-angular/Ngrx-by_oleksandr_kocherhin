import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../../types/app-state.interface';
import { PopularTagsStateInterface } from '../../types/popular-tags-state.interface';

export const popularTagsFeatureFeatureSelector = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>('popularTags');

export const popularTagsDataSelector = createSelector(
  popularTagsFeatureFeatureSelector,
  (authState) => authState.data
);
export const popularTagsErrorSelector = createSelector(
  popularTagsFeatureFeatureSelector,
  (authState) => authState.errors
);

export const popularTagsIsLoadingSelector = createSelector(
  popularTagsFeatureFeatureSelector,
  (feed) => feed.isLoading
);
