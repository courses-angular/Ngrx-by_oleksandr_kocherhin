import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getArticleAction } from '../../store/actions/get-article.action';
import { ActivatedRoute } from '@angular/router';
import { ArticleInterface } from '../../../shared/types/article-interface';
import { combineLatest, Observable, Subscription } from 'rxjs';
import {
  articleDataSelector,
  articleErrorSelector,
  articleIsLoadingSelector,
} from '../../store/selectors/article.selector';
import { currentUserSelector } from '../../../auth/store/selectors/auth-feature.selector';
import { map } from 'rxjs/operators';
import { CurrentUserInterface } from '../../../shared/types/current-user';
import { deleteArticleAction } from '../../store/actions/delete-article.action';

@Component({
  selector: 'yl-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string = '';
  article: ArticleInterface | null;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  errors$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    console.log(this.slug);
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleDataSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(([article, currentUser]) => {
        console.log('combineLatest', article, currentUser);
        if (!article || !currentUser) {
          return false;
        }
        return currentUser.username === article.author.username;
      })
    );
  }

  private initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleDataSelector))
      .subscribe((data) => {
        this.article = data;
      });
    this.isLoading$ = this.store.pipe(select(articleIsLoadingSelector));
    this.errors$ = this.store.pipe(select(articleErrorSelector));
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  onDeleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }
}
