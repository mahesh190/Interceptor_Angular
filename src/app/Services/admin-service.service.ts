import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}

  public setToken(a: any) {
    localStorage.setItem('res-token', a);
  }
  public getToken() {
    return localStorage.getItem('res-token');
  }
  public isLoggenIn() {
    return this.getToken() !== null;
  }

  public logout() {
    localStorage.removeItem('res-token');
  }

  getAll():Observable<any>{
    return this.http.get<any>("http://localhost:3000/users");
  }

  logins({ userNames, user_password, confirm_passwords }: any) {
    if (
      userNames === 'mahesh' &&
      user_password === '123' &&
      confirm_passwords === '123'
    ) {
      this.setToken('myTokens');
      return of({ result: true });
    }
    return throwError(new Error('failed to login'));
  }
}
