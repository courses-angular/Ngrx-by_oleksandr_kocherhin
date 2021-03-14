import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CurrentUserInterface } from '../../../shared/types/current-user';
import { currentUserSelector } from '../../../auth/store/selectors/auth-feature.selector';
import { filter } from 'rxjs/operators';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors/settings.selector';
import { updateCurrentUserAction } from '../../../auth/store/actions/update-current-user.action';
import { logoutAction } from '../../../auth/store/actions/sync.action';

@Component({
  selector: 'yl-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  settingsForm: FormGroup;
  currentUser: CurrentUserInterface = {
    username: '',
    image: '',
    token: '',
    bio: '',
    createdAt: '',
    email: '',
    id: null,
    updatedAt: '',
  };
  currentUserSubscription: Subscription;
  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorsInterface> | null;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
  }
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  private initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser) => {
        // @ts-ignore
        this.currentUser = currentUser;
        this.initializeForm(this.currentUser);
      });
  }

  initializeForm(currentUser: CurrentUserInterface): void {
    this.settingsForm = this.fb.group({
      email: currentUser.email,
      bio: currentUser.bio,
      image: currentUser.image,
      username: currentUser.username,
      password: '',
    });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onLogOut(): void {
    this.store.dispatch(logoutAction());
  }

  onSubmit(): void {
    const currentUserInput: CurrentUserInterface = {
      ...this.currentUser,
      ...this.settingsForm?.value,
    };
    console.log(currentUserInput);
    // @ts-ignore
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }
}
