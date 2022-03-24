import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetallnoteComponent } from './Components/getallnote/getallnote.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { AuthGuardGuard } from 'src/auth-guard.guard';
import { ArchiveviewComponent } from './Components/archiveview/archiveview.component';
import { DeleteviewComponent } from './Components/deleteview/deleteview.component';
import { IconscomponentComponent } from './Components/iconscomponent/iconscomponent.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "resetpassword", component: ResetpasswordComponent },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardGuard],
    children: [
      { path: '', component: IconscomponentComponent },
      { path: '', redirectTo: "notes", pathMatch: 'full' },
      { path: "notes", component: GetallnoteComponent },
      { path: "archive", component: ArchiveviewComponent },
      { path: "deleted", component: DeleteviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
