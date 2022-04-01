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
    return this.http.post(this.BaseURL + url, reqData, token && httpOptions)
  }

  getService(url: string, token: boolean = false, httpAuthOptions: any = {}) {
    return this.http.get(this.BaseURL + url, token && httpAuthOptions)
  }

  putService(url: string, reqData: any, token: boolean = true, httpAuthOptions: any = {}) {
    return this.http.put(this.BaseURL + url, reqData, token && httpAuthOptions)
  }

  deleteService(url: string, httpAuthOptions: any = {}) {
    return this.http.delete(this.BaseURL + url, httpAuthOptions)
  }
}
