import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/register-request.interface';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/current-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponseInterface } from '../types/auth-response.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
