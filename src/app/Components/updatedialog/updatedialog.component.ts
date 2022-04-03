import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteservices/note.service';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.scss']
})
export class UpdatedialogComponent implements OnInit {

  title: any
  body: any
  color: any

  constructor(private dialogRef: MatDialogRef<UpdatedialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public noteservice: NoteService) {
    console.log(data);
    this.title = data.title;
    this.body = data.body;
    this.color = data.color;
    console.log(this.color);
    
  }

  ngOnInit(): void {
  }

  colormatcher(predefinedcolors:any,args:any){
    return this.color.filter((obj:any) => {
      return obj.name.toLocaleLowerCase().includes(args);
    });
  }

  updatenote() {
    if (this.title != this.data.title || this.body != this.data.body) {
      this.data.title = this.title;
      this.data.body = this.body;
      this.noteservice.updatenote(this.data).subscribe((response: any) => {
        console.log(response.message)
      })
    }
    this.dialogRef.close()
  }

  pinnote() {
    this.noteservice.pinnote(this.data).subscribe((response: any) => {
      console.log(response)
    })
  }
}
