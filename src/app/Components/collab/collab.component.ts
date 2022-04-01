import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CollabService } from 'src/app/Services/collab/collab.service';
import { UserService } from 'src/app/Services/userservices/user.service';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {

  token: any
  owner: any
  userid: any
  noteid: any
  alluserlist: any
  colabuserlist: any
  addcoll: any
  namelist: any
  colabform!: FormGroup
  submitted = false

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<CollabComponent>,
    private collabservice: CollabService, private userservice: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.userid = this.data.userId
    this.noteid = this.data.noteId
    this.getowner(this.userid);
    this.getcolablist()
    this.colabform = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z]{3,}[.]*[a-z0-9]*[@]{1}[a-z]{2,}[.]{1}[co]{2}[m]*[.]*[a-z]*$")]]
    })
  }

  getowner(uid: any) {
    this.userservice.getusers().subscribe((response: any) => {
      this.alluserlist = response.data
      console.log(this.alluserlist);
      this.owner = response.data.filter((obj: any) => {
        return obj.userID === uid
      })
    })
  }

  getcolablist() {
    this.collabservice.getcolablist(this.noteid).subscribe((response: any) => {
      this.colabuserlist = response.data
      console.log(this.colabuserlist);
    })
  }

  add() {
    this.submitted = true;
    console.log(this.colabform.value);
    this.collabservice.create(this.colabform.value.emailID, this.noteid)
    .subscribe((response:any)=>{
      console.log(response);
    })
  }

  delete(colab:any){
    this.collabservice.deletecolab(colab.collabEmail,this.noteid)
  }
}

