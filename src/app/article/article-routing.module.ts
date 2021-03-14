import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { EditArticleComponent } from '../edit-article/components/edit-article/edit-article.component';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
  {
    path: 'articles/:slug/:edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
