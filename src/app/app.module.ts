import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { PersistenceService } from './shared/services/persistence.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { FeedComponent } from './shared/components/feed/feed.component';

@NgModule({
  declarations: [AppComponent, TopBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
  ],
  providers: [
    PersistenceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
