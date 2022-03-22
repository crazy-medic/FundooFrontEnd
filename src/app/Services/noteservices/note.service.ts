import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token: any

  constructor(private httpService: HttpService) { }

  createnote(data: any) {
    this.token = localStorage.getItem('token')
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('Notes/Create', data, true, headerObj)
  }

  getnotes() {
    this.token = localStorage.getItem('token')
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log("getall service called from noteservice");
    return this.httpService.getService('Notes/GetAll', true, headerObj)
  }
}
