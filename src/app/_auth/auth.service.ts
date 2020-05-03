import {Injectable} from '@angular/core';
import {userInfo} from '../_mock/mock-user';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {handleError} from '../_utils/my-core';
import {JsonToken} from './json-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:variable-name
  private _currentTokenSubject: BehaviorSubject<JsonToken>;

  constructor(private http: HttpClient) {
    this._currentTokenSubject = new BehaviorSubject<JsonToken>(new JsonToken());
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post('http://localhost:8080/login', {email, password}, {headers})
      .pipe(
        catchError(handleError),
        map(value => value)
      );
  }


  private get currentToken(): JsonToken {
    return this._currentTokenSubject.value;
  }

  get currentTokenObservable() {
    return this._currentTokenSubject.asObservable();
  }

  /**
   * Mỗi lần login thành công thì sẽ thiết lập lại phiên
   * @param authResult
   * @private
   */
  _setSession(authResult: any) {
    const jsonToken = new JsonToken();
    // Save authentication data and update login status subject
    jsonToken.expiresAt = authResult.expiresIn * 1000 + Date.now();
    jsonToken.accessToken = authResult.accessToken;
    jsonToken.authenticated = true;
    jsonToken.authorities = authResult.authorities;
    this._currentTokenSubject.next(jsonToken);
  }

  isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    return Date.now() < this.currentToken.expiresAt && this.currentToken.authenticated;
  }

  logout() {

  }


}
