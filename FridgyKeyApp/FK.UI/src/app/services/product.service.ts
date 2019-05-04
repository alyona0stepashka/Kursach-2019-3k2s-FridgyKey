/**
 * Created by annae on 21.04.2018.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServerResponse } from "../models/ServerResponse";

@Injectable()
export class ProductService {

  private _http;

  constructor(http: Http) {
    this._http = http;
  }

  public async getAllProducts(): Promise<any> {
    return (await this._http.get('/api/product/getall').toPromise()).json();
  }

  public async getProductsByUser(): Promise<any> {
    return (await this._http.get('/api/product').toPromise()).json();
  }

  public async getProductById(id: number): Promise<ServerResponse<any>> {
    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.get(`/api/product/${id}`).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async addProduct(product: any): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.post(`api/product/`,product).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async updateProduct(product: any): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.put(`api/product/`, product).toPromise());
      result = this.parseResponse(response);
    } catch (ex) {
      result = this.parseResponse(ex);
    }
    return result;
  }

  public async deleteProduct(id: number): Promise<ServerResponse<any>> {

    let result: ServerResponse<any> = new ServerResponse<any>();
    try {
      let response = (await this._http.delete(`api/product/${id}`).toPromise());
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
