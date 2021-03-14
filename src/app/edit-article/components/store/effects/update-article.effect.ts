import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EditArticleService } from '../../../servcies/edit-article.service';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '../ations/update-article.action';

@Injectable()
export class UpdateArticleEffect {
  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private route: Router
  ) {}

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.updateArticle(articleInput, slug).pipe(
          map((article) => {
            return updateArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );
  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.route.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );
}
