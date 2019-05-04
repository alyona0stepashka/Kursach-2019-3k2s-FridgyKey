 
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {SignIn} from '../models/SignIn';
import {SignUp} from '../models/SignUp';
import {CurrentUser} from '../models/CurrentUser';
import {ServerResponse} from '../models/ServerResponse';

@Injectable()
export class HttpAuthService {

  private _http;

  constructor(http: Http) {
    this._http = http;
  }

  public async login(user: SignIn): Promise<ServerResponse<any>> {
    const result: ServerResponse<any> = new ServerResponse<any>();

    try {
      const response = await this._http.post('/api/auth/login', user).toPromise();
      result.statusCode = response.status;
      if (response._body) {
        result.data = response.json();
      }
    } catch (ex) {
      console.log(ex);
      result.statusCode = ex.status;
      if (ex._body) {
        result.data = ex.json();
      }
    }
    return result;
  }

  public async signUp(user: SignUp): Promise<ServerResponse<any>> {
    const result: ServerResponse<any> = new ServerResponse<any>();

    try {
      const response = await this._http.post('/api/auth/registration', user).toPromise();
      result.statusCode = response.status;
      if (response._body) {
        result.data = response.json();
      }
    } catch (ex) {
      result.statusCode = ex.status;
      if (ex._body) {
        result.data = ex.json();
      }
    }
    return result;
  }

  public async externelLogin(user: SignUp): Promise<ServerResponse<any>> {
    const result: ServerResponse<any> = new ServerResponse<any>();

    try {
      const response = await this._http.post('api/auth/externalLogin', user).toPromise();
      result.statusCode = response.status;
      if (response._body) {
        result.data = response.json();
      }
    } catch (ex) {
      result.statusCode = ex.status;
      if (ex._body) {
        result.data = ex.json();
      }
    }
    return result;
  }

  public async GetCurrentUser(): Promise<CurrentUser> {
    const result: CurrentUser = (await this._http.get('/api/auth/user').toPromise()).json();
    return result;
  }

  public async logout() {
    await this._http.get('/api/auth/logout').toPromise();
  }
}
