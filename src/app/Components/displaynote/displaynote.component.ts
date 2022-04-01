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
  color:any
  @Output() deleterefresh = new EventEmitter<any>();
  @Output() archiverefresh = new EventEmitter<any>();
  @Output() colorevent = new EventEmitter<any>();
  @Output() updateevent = new EventEmitter<any>();
  
  predefinedcolors : Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ]

  constructor(public dialog: MatDialog, private dataservice: DataserviceService, private noteservice: NoteService,
    private router: Router) { }

  ngOnInit(): void {
    this.dataservice.recvData.subscribe((response: any) => {
      this.query = response
    })
  }

  Open(notedata: any) {
    let dialogRef = this.dialog.open(UpdatedialogComponent, { data: notedata } );
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