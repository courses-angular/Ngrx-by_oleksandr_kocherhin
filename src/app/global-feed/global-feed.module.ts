import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    FeedModule,
    BannerModule,
    ErrorMessageModule,
    PopularTagsModule,
  ],
})
export class GlobalFeedModule {}
