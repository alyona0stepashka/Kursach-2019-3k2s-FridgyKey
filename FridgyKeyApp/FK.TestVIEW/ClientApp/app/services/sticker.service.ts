/**
 * Created by annae on 20.04.2018.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServerResponse } from "../models/ServerResponse";


@Injectable()
export class FridgeService {

  private _http;

  constructor(http: Http) {
    this._http = http;
  }

  public async getAllStickers(): Promise<any> {
    return (await this._http.get('/api/sticker/admingetall').toPromise()).json();
  }

  //public async getAllStickersByUser(): Promise<any> {
  //  return (await this._http.get('/api/sticker').toPromise()).json();
  //}

  public async getStickerByFridgeId(id: number): Promise<ServerResponse<any>> {
    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.get(`/api/sticker/${id}`).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async addSticker(sticker: any): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.post(`api/sticker`, sticker).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  } 

  public async deleteSticker(id: number): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.delete(`api/sticker/${id}`).toPromise());
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
