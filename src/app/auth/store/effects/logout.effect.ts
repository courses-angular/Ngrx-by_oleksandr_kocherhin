import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { Router } from '@angular/router';
import { logoutAction } from '../actions/sync.action';
import { switchMap, tap } from 'rxjs/operators';

@Injectable()
export class LogoutEffect {
  constructor(
    private actions$: Actions,
    private localStorageService: PersistenceService,
    private router: Router
  ) {}
  logOutStream$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.localStorageService.setLocalStorage('accessToken', '');
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
