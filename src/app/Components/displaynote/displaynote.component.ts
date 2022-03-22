import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  @Input() NotesList: any
  isHovered = false;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    
  }

  MouseIn() {
    this.isHovered = true;
  }

  MouseOut() {
    this.isHovered = false;
  }

  Open(notedata:any) {
    let dialogRef = this.dialog.open(UpdatedialogComponent, { data: notedata });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}