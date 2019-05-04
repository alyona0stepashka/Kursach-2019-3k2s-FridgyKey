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

  public async getAllFridges(): Promise<any> {
    return (await this._http.get('/api/fridge/admingetall').toPromise()).json();
  }

  public async getAllFridgesByUser(): Promise<any> {
    return (await this._http.get('/api/fridge').toPromise()).json();
  } 

  public async getFridgeById(id: number): Promise<ServerResponse<any>> {
    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.get(`/api/fridge/${id}`).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async openFridgeById(id: number): Promise<ServerResponse<any>> {
    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.get(`/api/fridge/open/${id}`).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async addFridge(fridge: any): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.post(`api/fridge`, fridge).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async addUserFridge(userfridge: any): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.post(`api/userfridge`, userfridge).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }


  public async deleteUserFridge(id: number): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.delete(`api/userfridge/${id}`).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async updateFridge(fridge: any): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.put(`api/fridge`, fridge).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async deleteFridge(id: number): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.delete(`api/fridge/${id}`).toPromise());
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
