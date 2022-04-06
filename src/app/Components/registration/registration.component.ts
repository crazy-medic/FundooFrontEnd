import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservices/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerationForm !: FormGroup;
  submitted = false;
  showpass:boolean= false

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.registerationForm = this.formBuilder.group({
      FirstName: ['', Validators.required,Validators.minLength(3)],
      LastName: [''],
      EmailID: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required]],
    });
  }
  
  get f() { return this.registerationForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerationForm.invalid) {
      return;
    }
    console.log(this.registerationForm.value)
    this.userService.registration(this.registerationForm.value).subscribe((response:any)=>{
      console.log(response);
    })
  }
  toggle(){
    this.showpass = !this.showpass;
  }
}
