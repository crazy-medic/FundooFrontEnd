import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TakenoteComponent } from './Components/takenote/takenote.component';
import { GetallnoteComponent } from './Components/getallnote/getallnote.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { IconscomponentComponent } from './Components/iconscomponent/iconscomponent.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdatedialogComponent } from './Components/updatedialog/updatedialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { AuthGuardGuard } from 'src/auth-guard.guard';
import { AuthguardService } from './Services/AuthGaurd/authguard.service';
import { DeleteviewComponent } from './Components/deleteview/deleteview.component';
import { ArchiveviewComponent } from './Components/archiveview/archiveview.component';
import { SearchPipe } from './Pipes/Search/search.pipe';
import { LabelsComponent } from './Components/labels/labels.component';
import { CollabComponent } from './Components/collab/collab.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    GetallnoteComponent,
    DisplaynoteComponent,
    IconscomponentComponent,
    UpdatedialogComponent,
    DeleteviewComponent,
    ArchiveviewComponent,
    SearchPipe,
    LabelsComponent,
    CollabComponent,
  ],
  entryComponents: [UpdatedialogComponent],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule,
    MatDividerModule, MatCardModule, MatCheckboxModule, MatGridListModule, MatButtonModule, FlexLayoutModule,
    ReactiveFormsModule, MatSidenavModule, FormsModule, HttpClientModule, MatToolbarModule, MatIconModule,
    MatListModule, MatDialogModule, MatMenuModule,
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
