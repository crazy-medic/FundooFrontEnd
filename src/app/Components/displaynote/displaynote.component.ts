import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  @Input() NotesList: any

  constructor(public dialog: MatDialog,private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.recvData.subscribe((response:any)=>{
      console.log(response);
    })
  }

  Open(notedata:any) {
    let dialogRef = this.dialog.open(UpdatedialogComponent, {data: notedata });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  responsefromnote(e:any){
    console.log(e);
  }
}