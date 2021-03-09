import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import {
  getCurrentUserFailureOnLoadAction,
  getCurrentUserOnLoadAction,
  getCurrentUserSuccessOnLoadAction,
} from '../actions/get-current-user-onload.action';

@Injectable()
export class GetCurrentUserOnloadEffectService {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: PersistenceService
  ) {}

  getCurrentUserOnLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserOnLoadAction),
      switchMap(() => {
        const token = this.localStorageService.getLocalStorage('accessToken');
        if (!token) {
          return of(getCurrentUserFailureOnLoadAction());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser) => {
            return getCurrentUserSuccessOnLoadAction({ currentUser });
          }),
          catchError(() => {
            return of(getCurrentUserFailureOnLoadAction());
          })
        );
      })
    )
  );
}
