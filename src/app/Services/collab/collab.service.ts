import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  token: any
  noteid: any
  collabEmail: any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

  getheader() {
    let headerObj = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      })
    }
    return headerObj;
  }

  create(email: any, noteid: any) {
    let data = {
      notesId: noteid,
      emailID: email,
    }
    return this.httpService.postService('Collab/Add', data, true, this.getheader())
  }

  getcolablist(noteId: any) {
    let url = 'Collab/Show?noteid=' + noteId
    return this.httpService.getService(url, true, this.getheader());
  }

  deletecolab(colab: any, noteid: any) {
    let data = {
      notesId: noteid,
      emailId: colab
    }
    let headerObj = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('Collab/Remove',data,true,headerObj)
  }

}
