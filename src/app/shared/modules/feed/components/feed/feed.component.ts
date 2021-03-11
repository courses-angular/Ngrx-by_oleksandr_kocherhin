import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GetFeedResponseInterface } from '../../../../../global-feed/types/get-feed-response-interface';
import {
  feedDataSelector,
  feedErrorSelector,
  isFeedLoadingSelector,
} from '../../store/selectors/feed.selector.selectors';
import { getFeedAction } from '../../store/actions/get-feed.actions';
import { environment } from '../../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { parseUrl, stringify } from 'query-string';

@Component({
  selector: 'yl-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlProps: string = '';
  isLoadingFeed$: Observable<boolean>;
  feedError$: Observable<string | null>;
  feedData$: Observable<GetFeedResponseInterface | null>;
  limit: number = environment.limit;
  baseUrl: string = '';
  queryParamsSubscription: Subscription;
  currentPage: number = null;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.baseUrl = changes.apiUrlProps.currentValue;
    // const isApiUrlChanged = changes.apiUrlProps.firstChange
    //   ? this.baseUrl
    //   : this.initializeListeners();
    // console.log('baseUrl', this.baseUrl);
    const isApiUrlChanged =
      !changes.apiUrlProps.firstChange &&
      changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue;
    console.log('isApiUrlChanged', isApiUrlChanged);
    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }

  ngOnInit(): void {
    console.log('baseUrl', this.router.url);
    this.initializeValues();
    this.initializeListeners();
  }

  private initializeValues(): void {
    this.baseUrl = this.router.url.split('?')[0];
    this.isLoadingFeed$ = this.store.pipe(select(isFeedLoadingSelector));
    this.feedError$ = this.store.pipe(select(feedErrorSelector));
    this.feedData$ = this.store.pipe(select(feedDataSelector));
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params) => {
        this.currentPage = Number(params.page || '1');
        console.log('Current page', this.currentPage);
        this.fetchFeed();
      }
    );
  }

  private fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifyParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifyParams}`;
    console.log('apiUrlWithParams', apiUrlWithParams);
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
    // limit 10
    // offset 0
    // offset 10
    // offset 20
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
