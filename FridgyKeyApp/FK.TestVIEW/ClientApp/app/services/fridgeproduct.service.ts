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

  public async getAllFridgeProducts(): Promise<any> {
    return (await this._http.get('/api/fridgeproduct/admingetall').toPromise()).json();
  }

  public async getAllFridgeProductsByUser(): Promise<any> {
    return (await this._http.get('/api/fridgeproduct').toPromise()).json();
  }

  public async getFridgeProductByFridgeId(id: number): Promise<ServerResponse<any>> {
    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.get(`/api/fridgeproduct/${id}`).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async addFridge(fridgeproduct: any): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.post(`api/fridgeproduct`, fridgeproduct).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async updateFridgeProduct(fridgeproduct: any): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.put(`api/fridgeproduct`, fridgeproduct).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async deleteFridgeProduct(id: number): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.delete(`api/fridgeproduct/${id}`).toPromise());
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
