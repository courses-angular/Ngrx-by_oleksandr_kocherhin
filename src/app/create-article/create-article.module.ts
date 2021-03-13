import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateArticleRoutingModule } from './create-article-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleService } from './services/create-article.service';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/create-article.reducer';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
