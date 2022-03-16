import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registration(data: {}) {
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("signup called in service user", data);
    return this.httpService.postService('User/SignUp', data, false, headerObj);
  }

  login(data:{}){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("login called from user service",data);
    return this.httpService.postService('User/Login',data,false,headerObj);
  }

  reset(data:{}){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("resetpassword called from user service",data);
    return this.httpService.postService('User/ResetPassword',data,false,headerObj);
  }

  forgot(data:any){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("forgotpassword called from user service",data);
    return this.httpService.postService('User/ForgotPassword?email='+data.email,{},false,headerObj);
  }
}
