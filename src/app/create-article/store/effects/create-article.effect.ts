import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CreateArticleService } from '../../services/create-article.service';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/create-article.action';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CreateArticleEffect {
  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private route: Router
  ) {}

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article) => {
            return createArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );
  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => {
          this.route.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );
}
