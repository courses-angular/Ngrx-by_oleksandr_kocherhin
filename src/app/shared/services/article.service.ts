import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { ArticleInterface } from '../types/article-interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticleBySlug(slug: string): Observable<ArticleInterface> {
    return this.http
      .get<GetArticleResponseInterface>(
        `${environment.apiUrl}/articles/${slug}`
      )
      .pipe(map((response) => response.article));
  }
}
