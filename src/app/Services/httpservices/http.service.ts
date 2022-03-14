import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseURL = environment.BaseUrl
  constructor(private http: HttpClient) { }

  postService(url: string, reqData: any, token: boolean = false, httpOptions: any = {}) {
    console.log("service called from http",reqData);
    return this.http.post(this.BaseURL + url, reqData, token && httpOptions)
  }

  getService(url: string, token: boolean = false, httpAuthOptions: any = {}) {
    console.log("Get service called");
  }

  putService() {

  }

  deleteService() {

  }
}
