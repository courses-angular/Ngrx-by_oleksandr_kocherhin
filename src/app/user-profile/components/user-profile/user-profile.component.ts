import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { ProfileInterface } from '../../../shared/types/profile-interface';
import { select, Store } from '@ngrx/store';
import {
  errorsSelector,
  getUserProfileFeatureSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../../store/selectors/get-user-profile.selector';
import { getUserProfileAction } from '../../store/actions/get-user-profile.action';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { currentUserSelector } from '../../../auth/store/selectors/auth-feature.selector';
import { filter, map } from 'rxjs/operators';
import { CurrentUserInterface } from '../../../shared/types/current-user';

@Component({
  selector: 'yl-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  userProfile: ProfileInterface;
  errors$: Observable<string | null>;
  userProfileSubscription: Subscription;
  slug: string = '';
  apiUrl: string = '';
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          ProfileInterface
        ]) => {
          return currentUser.username === userProfile.username;
        }
      )
    );
  }

  private initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile) => {
        this.userProfile = userProfile;
      });

    this.route.params.subscribe((params) => {
      this.slug = params.slug;
      this.fetchUserProfile();
    });
  }
  private fetchUserProfile(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }
  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return (this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`);
  }
  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }
}
