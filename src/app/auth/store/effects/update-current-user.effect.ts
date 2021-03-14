import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { Router } from '@angular/router';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from '../actions/update-current-user.action';

@Injectable()
export class UpdateCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService
          .updateCurrentUserSettings(currentUserInput)
          .pipe(
            map((currentUser) => {
              return updateCurrentUserSuccessAction({ currentUser });
            }),
            catchError((errors: HttpErrorResponse) => {
              return of(updateCurrentUserFailureAction({ errors: errors.error.errors }));
            })
          );
      })
    )
  );

  // redirectAfterLogin$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(loginSuccessAction),
  //       tap(() => {
  //         this.router.navigateByUrl('/');
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
