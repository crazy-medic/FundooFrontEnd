import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token: any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }

  getheader(){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return headerObj;
  }

  createnote(data: any) {
    return this.httpService.postService('Notes/Create', data, true, this.getheader())
  }

  getnotes() {
    return this.httpService.getService('Notes/Show', true, this.getheader())
  }

  trashnote(data: any) {
    let url = 'Notes/Delete?noteid=' + data.noteId
    return this.httpService.putService(url, null, true, this.getheader())
  }

  archivenote(note: any) {
    let url = 'Notes/Archive?noteid=' + note.noteId
    return this.httpService.putService(url, null, true, this.getheader())
  }

  pinnote(note: any) {
    let url = 'Notes/Pin?noteid=' + note.noteId
    return this.httpService.putService(url, null, true, this.getheader())
  }

  updatenote(data: any) {
    return this.httpService.putService('Notes/Update', data, true, this.getheader())
  }
  colorChange(data: any) {
    let url = 'Notes/AddColor?color=' + data.color + '&noteid=' + data.noteId
    return this.httpService.putService(url,null,true, this.getheader())
  }
  permadelete(data: any) {
    let url = 'Notes/ForeverDelete?noteid=' + data.noteId
    return this.httpService.deleteService(url, this.getheader())
  }
}
