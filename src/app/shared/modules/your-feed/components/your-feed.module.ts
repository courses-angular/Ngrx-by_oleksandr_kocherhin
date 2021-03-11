import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourFeedRoutingModule } from './your-feed-routing.module';
import { YourFeedComponent } from './your-feed/your-feed.component';
import { FeedModule } from '../../feed/feed.module';
import { BannerModule } from '../../banner/banner.module';
import { FeedTogglerModule } from '../../feed-toggler/feed-toggler.module';
import { PopularTagsModule } from '../../popular-tags/popular-tags.module';

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    YourFeedRoutingModule,
    FeedModule,
    BannerModule,
    FeedTogglerModule,
    PopularTagsModule,
  ],
  exports: [YourFeedComponent],
})
export class YourFeedModule {}
