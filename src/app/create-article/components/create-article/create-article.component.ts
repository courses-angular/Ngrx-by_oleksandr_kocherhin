import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from '../../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { select, Store } from '@ngrx/store';
import {
  createArticleErrorSelector,
  createArticleIsSubmittingSelector,
} from '../../store/selectors/create-article.selector';
import { createArticleAction } from '../../store/actions/create-article.action';

@Component({
  selector: 'yl-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorsInterface | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(
      select(createArticleIsSubmittingSelector)
    );
    this.validationErrors$ = this.store.pipe(
      select(createArticleErrorSelector)
    );
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
