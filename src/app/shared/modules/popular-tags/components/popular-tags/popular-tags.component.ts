import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPopularTagsAction } from '../../store/actions/get-popular-tags.action';
import { Observable } from 'rxjs';
import { PopularTagType } from '../../../../types/popular-tag.type';
import {
  popularTagsDataSelector,
  popularTagsErrorSelector,
  popularTagsIsLoadingSelector,
} from '../../store/selectors/popular-tags.selector';

@Component({
  selector: 'yl-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  errors$: Observable<string | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsDataSelector));
    this.isLoading$ = this.store.pipe(select(popularTagsIsLoadingSelector));
    this.errors$ = this.store.pipe(select(popularTagsErrorSelector));
  }
  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
