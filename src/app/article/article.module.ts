import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../auth/store/reducers/reducers';
import { ArticleComponent } from './components/article/article.component';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { articleReducer } from './store/reducers/reducres.reducer';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/delete-article.effect';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ErrorMessageModule,
    LoadingModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    TagListModule,
  ],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
