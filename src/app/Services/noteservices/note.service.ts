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
    return this.httpService.getService('Notes/Show', true, headerObj)
  }

  trashnote(data: any) {
    this.token = localStorage.getItem('token')
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data);
    var url = 'Notes/Delete?noteid=' + data.noteId
    return this.httpService.putService(url, null, true, headerObj)
  }

  archivenote(note: any) {
    this.token = localStorage.getItem('token')
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(note);
    var url = 'Notes/Archive?noteid=' + note.noteId
    return this.httpService.putService(url, null, true, headerObj)
  }

  pinnote(note: any) {
    this.token = localStorage.getItem('token')
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(note);
    var url = 'Notes/Pin?noteid=' + note.noteId
    return this.httpService.putService(url, null, true, headerObj)
  }

  updatenote(data: any) {
    this.token = localStorage.getItem('token')
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data);
    return this.httpService.putService('Notes/Update', data, true, headerObj)
  }
  colorChange(data: any) {
    this.token = localStorage.getItem('token')
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data);
    var url = 'Notes/AddColor?color=' + data.color + '&noteid=' + data.noteId
    return this.httpService.putService(url,null,true, headerObj)
  }
  permadelete(data: any) {
    this.token = localStorage.getItem('token')
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data);
    var url = 'Notes/ForeverDelete?noteid=' + data.noteId
    return this.httpService.deleteService(url, headerObj)
  }
}
