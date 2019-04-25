/**
 * Created by annae on 21.04.2018.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {ServerResponse} from '../models/ServerResponse';

@Injectable()
export class UserService {

  private _http;

  constructor(http: Http) {
    this._http = http;
  }


  public async updateUser(user): Promise<ServerResponse<any>> {
    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = await this._http.put(`api/user`, user).toPromise();
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  private parseResponse(response): ServerResponse<any> {
    let res: ServerResponse<any> = new ServerResponse<any>();
    res.statusCode = response.status;
    if (response._body) {
      res.data = response.json();
    }
    return res;
  }
}
