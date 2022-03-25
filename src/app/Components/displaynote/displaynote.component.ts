import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { SearchPipe } from 'src/app/Pipes/Search/search.pipe';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';
import { NoteService } from 'src/app/Services/noteservices/note.service';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  @Input() NotesList: any
  query:any

  constructor(public dialog: MatDialog, private dataservice: DataserviceService, private noteservice: NoteService //,private search:SearchPipe
  ) { }

  ngOnInit(): void {
    this.dataservice.recvData.subscribe((response: any) => {
      console.log(response);
      //var query=response;
    })
  }

  Open(notedata: any) {
    let dialogRef = this.dialog.open(UpdatedialogComponent, { data: notedata });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  responsefromnote(e: any) {
    console.log(e);
  }

  Pin(notedata: any) {
    this.noteservice.pinnote(notedata).subscribe((response: any) => {
      console.log(response)
    })
  }
}