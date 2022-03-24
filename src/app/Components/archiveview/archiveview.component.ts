import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';
import { NoteService } from 'src/app/Services/noteservices/note.service';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';

@Component({
  selector: 'app-archiveview',
  templateUrl: './archiveview.component.html',
  styleUrls: ['./archiveview.component.scss']
})
export class ArchiveviewComponent implements OnInit {

  archivedNotes:any

  constructor(public dialog: MatDialog,private dataservice:DataserviceService,public noteservice: NoteService) { }

  ngOnInit(): void {
    this.getarchived();
  }

  Open(notedata:any) {
    let dialogRef = this.dialog.open(UpdatedialogComponent, {data: notedata });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  getarchived() {
    this.noteservice.getnotes().subscribe((response: any) => {
      console.log(response.data);
      var datalist = response.data.filter((obj:any)=>{
        return obj.isArchived==true
      })
      this.archivedNotes = datalist;
    })
  }
}
