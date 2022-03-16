import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetallnoteComponent } from './Components/getallnote/getallnote.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { TakenoteComponent } from './Components/takenote/takenote.component';

const routes: Routes = [
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "resetpassword", component: ResetpasswordComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "notes", component: GetallnoteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
