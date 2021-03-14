import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditArticleComponent} from './components/edit-article/edit-article.component';
import {ArticleFormModule} from '../shared/modules/article-form/article-form.module';
import {EditArticleService} from './servcies/edit-article.service';
import {ArticleService as SharedArticleService} from '../shared/services/article.service';
import {EffectsModule} from '@ngrx/effects';
import {UpdateArticleEffect} from './components/store/effects/update-article.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './components/store/reducers/update-article.reducer';
import {LoadingModule} from '../shared/modules/loading/loading.module';
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backend-error-messages.module';
import {EditArticleRoutingModule} from './edit-article-routing.module';
import {GetArticleUpdatedEffect} from './components/store/effects/get-article.effect';

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    ArticleFormModule,
    EditArticleRoutingModule,
    LoadingModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('editArticle', reducers),
    EffectsModule.forFeature([GetArticleUpdatedEffect, UpdateArticleEffect]),
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
