import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,MatFormFieldModule,MatInputModule,
    MatDividerModule,MatCardModule,MatCheckboxModule,MatGridListModule,MatButtonModule,FlexLayoutModule, ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
