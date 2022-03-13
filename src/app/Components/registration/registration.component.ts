import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerationForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerationForm = this.formBuilder.group({
      firstName: ['', Validators.required,Validators.minLength(3)],
      lastName: [''],
      email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z]{3,}[.]*[a-z0-9]*[@]{1}[a-z]{2,}[.]{1}[co]{2}[m]*[.]*[a-z]*$")]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  
  get f() { return this.registerationForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerationForm.invalid) {
      return;
    }
    console.log(this.registerationForm.value)
  }
}
