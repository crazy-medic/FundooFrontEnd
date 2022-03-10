import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';

const routes: Routes = [
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"resetpassword",component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
