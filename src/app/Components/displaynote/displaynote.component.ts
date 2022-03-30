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
  
  predefinedcolors = [
    { name: 'White', colorcode: '#FFFFFF' },
    { name: 'Red', colorcode: '#f28b82' },
    { name: 'Green', colorcode: '#ccff90' },
    { name: 'Blue', colorcode: '#cbf0f8' },
    { name: 'Orange', colorcode: '#fbbc04' },
    { name: 'Yellow', colorcode: '#FFFF00' },
    { name: 'Dark Blue', colorcode: '#030238' },
    { name: 'Pink', colorcode: '#fdcfe8' },
    { name: 'Brown', colorcode: '#e6c9a8' },
    { name: 'Grey', colorcode: '#e8eaed' },
    { name: 'Teal', colorcode: '#a7ffeb' },
    { name: 'Purple', colorcode: '#d7aefb' },
  ]

  constructor(public dialog: MatDialog, private dataservice: DataserviceService, private noteservice: NoteService,
    private router: Router) { }

  ngOnInit(): void {
    this.dataservice.recvData.subscribe((response: any) => {
      console.log(response);
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