import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffect } from './store/effects/get-user-profile.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { FeedModule } from '../shared/modules/feed/feed.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    StoreModule.forFeature('userProfile', reducers),
    EffectsModule.forFeature([GetUserProfileEffect]),
    LoadingModule,
    FeedModule,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
