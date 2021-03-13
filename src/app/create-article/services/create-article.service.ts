import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { ArticleInterface } from '../../shared/types/article-interface';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { SaveArticleResponseInterface } from '../../shared/types/save-article-response.interface';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    return this.http
      .post<SaveArticleResponseInterface>(
        `${environment.apiUrl}/articles`,
        articleInput
      )
      .pipe(map((res: SaveArticleResponseInterface) => res.article));
  }
}
