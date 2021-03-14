import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/register-request.interface';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/current-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponseInterface } from '../types/auth-response.interface';
import { map } from 'rxjs/operators';
import { LoginRequestInterface } from '../types/login-request.interface';
import { CurrentUserInputInterface } from '../../shared/types/current-user-input.interface';

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
      .pipe(map(this.getUser));
  }
  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/users/login`, data)
      .pipe(map(this.getUser));
  }
  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get(`${environment.apiUrl}/user`).pipe(map(this.getUser));
  }
  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }
  updateCurrentUserSettings(
    currentUserInput: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    return this.http
      .put(`${environment.apiUrl}/user`, currentUserInput)
      .pipe(map(this.getUser));
  }
}
