import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { UserProfileStateInterface } from '../../types/user-profile-state.interface';

export const getUserProfileFeatureSelector = createFeatureSelector<
  AppStateInterface,
  UserProfileStateInterface
>('userProfile');

export const isLoadingSelector = createSelector(
  getUserProfileFeatureSelector,
  (userProfile) => userProfile.isLoading
);

export const userProfileSelector = createSelector(
  getUserProfileFeatureSelector,
  (userProfile) => userProfile.data
);

export const errorsSelector = createSelector(
  getUserProfileFeatureSelector,
  (userProfile) => userProfile.errors
);
