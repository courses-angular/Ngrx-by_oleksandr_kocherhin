import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetFeedResponseInterface } from '../../../../../global-feed/types/get-feed-response-interface';
import {
  feedDataSelector,
  feedErrorSelector,
  isFeedLoadingSelector,
} from '../../store/selectors/feed.selector.selectors';
import { getFeedAction } from '../../store/actions/get-feed.actions';

@Component({
  selector: 'yl-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string = '';
  isLoadingFeed$: Observable<boolean>;
  feedError$: Observable<string | null>;
  feedData$: Observable<GetFeedResponseInterface | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isLoadingFeed$ = this.store.pipe(select(isFeedLoadingSelector));
    this.feedError$ = this.store.pipe(select(feedErrorSelector));
    this.feedData$ = this.store.pipe(select(feedDataSelector));
  }

  private fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
