import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelsComponent } from '../labels/labels.component';
import { LabelService } from 'src/app/Services/label/label.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  LabelList: any

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataservice: DataserviceService,
    private router: Router, public dialog: MatDialog,private labelservice:LabelService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.getLabels();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  refresh() {
    window.location.reload();
  }

  Search(event: any) {
    console.log(event.target.value);
    this.dataservice.sendData(event.target.value)
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl("/login")
  }

  getLabels(){
    this.labelservice.getlabels().subscribe((response: any) => {
      this.LabelList = response.data;
    })
  }

  Edit(LabelList:any) {
    let dialogRef = this.dialog.open(LabelsComponent, { data: LabelList });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}