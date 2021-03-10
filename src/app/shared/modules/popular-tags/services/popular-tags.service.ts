import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTagType } from '../../../types/popular-tag.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';
import { GetPopularTagsResponseInterface } from './types/get-popular-tags-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    return this.http
      .get(`${environment.apiUrl}/tags`)
      .pipe(map((response: GetPopularTagsResponseInterface) => response.tags));
  }
}
