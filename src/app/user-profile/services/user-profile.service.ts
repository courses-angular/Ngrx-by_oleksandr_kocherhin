import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileInterface } from '../../shared/types/profile-interface';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { GetUserProfileResponseInterface } from '../types/get-user-profile-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    return this.http
      .get<GetUserProfileResponseInterface>(
        `${environment.apiUrl}/profiles/${slug}`
      )
      .pipe(map((profile) => profile.profile));
  }
}
