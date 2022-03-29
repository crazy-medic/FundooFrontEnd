import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  query: any
  @Output() deleterefresh = new EventEmitter<any>();
  @Output() archiverefresh = new EventEmitter<any>();
  @Output() colorevent = new EventEmitter<any>();
  @Output() updateevent = new EventEmitter<any>();

  constructor(public dialog: MatDialog, private dataservice: DataserviceService, private noteservice: NoteService,
    private router: Router) { }

  ngOnInit(): void {
    this.dataservice.recvData.subscribe((response: any) => {
      console.log(response);
      this.query = response
    })
  }

  Open(notedata: any) {
    let dialogRef = this.dialog.open(UpdatedialogComponent, { data: notedata });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.updateevent.emit(' ');
    })
  }

  responsefromnote(e: any) {
    console.log(e);
  }

  archevent(data: any) {
    this.archiverefresh.emit(' ');
  }

  deleteref(data: any) {
    this.deleterefresh.emit(' ');
  }

  colevent(data: any) {
    this.colorevent.emit(' ');
  }

  Pin(notedata: any) {
    this.noteservice.pinnote(notedata).subscribe((response: any) => {
      console.log(response)
    })
    this.router.navigateByUrl('dashboard/notes');
  }
}