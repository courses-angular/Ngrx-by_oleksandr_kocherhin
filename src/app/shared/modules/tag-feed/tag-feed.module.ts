import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagFeedRoutingModule } from './tag-feed-routing.module';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { BannerModule } from '../banner/banner.module';
import { FeedTogglerModule } from '../feed-toggler/feed-toggler.module';
import { FeedModule } from '../feed/feed.module';
import { PopularTagsModule } from '../popular-tags/popular-tags.module';

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    TagFeedRoutingModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
  ],
})
export class TagFeedModule {}
