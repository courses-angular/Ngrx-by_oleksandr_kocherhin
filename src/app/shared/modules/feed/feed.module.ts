import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers.reducer';
import { FeedService } from '../../services/feed.service';
import { FeedComponent } from './components/feed/feed.component';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { UtilsService } from '../../services/utils.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService, UtilsService],
})
export class FeedModule {}
