import { Injectable } from '@angular/core';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { ArticleInterface } from '../../shared/types/article-interface';
import { SaveArticleResponseInterface } from '../../shared/types/save-article-response.interface';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}
  updateArticle(
    articleInput: ArticleInputInterface,
    slug: string
  ): Observable<ArticleInterface> {
    return this.http
      .put<SaveArticleResponseInterface>(
        `${environment.apiUrl}/articles/${slug}`,
        articleInput
      )
      .pipe(map((res: SaveArticleResponseInterface) => res.article));
  }
}
