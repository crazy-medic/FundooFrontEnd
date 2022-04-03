import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';
import { NoteService } from 'src/app/Services/noteservices/note.service';
import { CollabComponent } from '../collab/collab.component';

@Component({
  selector: 'app-iconscomponent',
  templateUrl: './iconscomponent.component.html',
  styleUrls: ['./iconscomponent.component.scss']
})
export class IconscomponentComponent implements OnInit {

  @Input() notecarddata: any
  @Input() colordata: any
  @Input() newnotecolor:any
  @Output() changecolor = new EventEmitter<any>();
  @Output() deleterefresh = new EventEmitter<any>();
  @Output() archiverefresh = new EventEmitter<any>();
  @Output() permadel = new EventEmitter<any>();

  showIcons: boolean = true

  constructor(public noteservice: NoteService, private dataservice: DataserviceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Delete() {
    this.noteservice.trashnote(this.notecarddata).subscribe((response: any) => {
    })
    this.deleterefresh.emit(Response)
  }

  Archive() {
    this.noteservice.archivenote(this.notecarddata).subscribe((response: any) => {
    })
    this.archiverefresh.emit(Response)
  }

  Permadelete() {
    this.noteservice.permadelete(this.notecarddata).subscribe((response: any) => {
      console.log(response);
    })
    this.permadel.emit('');
  }

  colorselect(color: any) {
    this.notecarddata.color = color
    if (this.notecarddata.noteId) {
      this.noteservice.colorChange(this.notecarddata).subscribe((response: any) => {
        console.log(response);
        this.changecolor.emit(color)
      })
    }
  }

  collaboration(ncdata: any) {
    ncdata = this.notecarddata
    let dialogRef = this.dialog.open(CollabComponent, { data: ncdata });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    })
  }

}
