import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userlist:any

  constructor(private httpService: HttpService) { }

  registration(data: {}) {
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('User/SignUp', data, false, headerObj);
  }

  login(data:{}){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('User/Login',data,false,headerObj);
  }

  reset(data:{}){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('User/ResetPassword',data,false,headerObj);
  }

  forgot(data:any){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let url = 'User/ForgotPassword?email='+data.email
    return this.httpService.postService(url,{},false,headerObj);
  }

  getusers(){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.getService('User/GetUsers', false, headerObj)
  }
}
