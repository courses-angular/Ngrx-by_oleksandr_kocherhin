import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from '../../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { select, Store } from '@ngrx/store';
import {
  ArticleSelector,
  ErrorsSelector,
  IsLoadingSelector,
  IsSubmittingSelector,
} from '../store/selectors/update-article.selector';
import { updateArticleAction } from '../store/ations/update-article.action';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from '../store/ations/get-article.action';
import { filter, map } from 'rxjs/operators';
import { ArticleInterface } from '../../../shared/types/article-interface';

@Component({
  selector: 'yl-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  slug: string = '';
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorsInterface | null>;
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    console.log(this.slug);
    this.isLoading$ = this.store.pipe(select(IsLoadingSelector));
    this.isSubmitting$ = this.store.pipe(select(IsSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(ErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(ArticleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
  onSubmit(articleInput: ArticleInputInterface, slug: string): void {
    this.store.dispatch(updateArticleAction({ articleInput, slug }));
  }
}
