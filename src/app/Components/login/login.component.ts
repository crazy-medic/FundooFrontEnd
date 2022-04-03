import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform !: FormGroup;
  submitted = false;
  user='1';
  showpass:boolean= false

  constructor(private formBuilder: FormBuilder, private userService: UserService,private route:Router) { }

  ngOnInit(): void {
    localStorage.setItem('token',this.user)
    this.loginform = this.formBuilder.group({
      EmailID: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z]{3,}[.]*[a-z0-9]*[@]{1}[a-z]{2,}[.]{1}[co]{2}[m]*[.]*[a-z]*$")]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginform.invalid) {
      return;
    }
    this.userService.login(this.loginform.value).subscribe((response: any) => {
      if(response.data!=null && localStorage.getItem('token')!=null){
        localStorage.removeItem('token');
        localStorage.setItem('token',response.data);
      }else{
        localStorage.setItem('token',response.data)
      }
      this.route.navigate(['./dashboard/notes']);
    })
  }
  toggle(){
    this.showpass = !this.showpass;
  }
}
