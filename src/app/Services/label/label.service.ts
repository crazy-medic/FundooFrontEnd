import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  
  token = localStorage.getItem('token');

  constructor(private https:HttpService) { }

  getheaders(){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return headerObj
  }

  getlabels(){
    return this.https.getService('Label/GetAll',true,this.getheaders());
  }

  createlabel(data:any){
    var url = 'Label/Create?labelname='+data
    return this.https.postService(url,null,true,this.getheaders())
  }

  updatelabel(olddata:any,newdata:any){
    var url = 'Label/Update?oldLabelName='+olddata.labelName+'&newLabelName='+newdata.labelName;
    return this.https.putService(url,null,true,this.getheaders())
  }

  deletelabel(data:any){
    var url = 'Label/Delete?labelName='+data;
    return this.https.deleteService(url,this.getheaders())
  }
}
