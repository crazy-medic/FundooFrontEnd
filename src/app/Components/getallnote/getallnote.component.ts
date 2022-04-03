import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservices/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {

  NotesArray: any

  constructor(public noteservice: NoteService) { }

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.noteservice.getnotes().subscribe((response: any) => {
      var datalist = response.data.filter((obj: any) => {
        return obj.isDeleted == false && obj.isArchived == false
      })
      this.NotesArray = datalist.reverse();
    })
  }

  update(data: any) {
    this.getall();
  }
  colorref(data: any) {
    this.getall();
  }
  archevent(data: any) {
    this.getall();
  }
  deleteref(data: any) {
    this.getall();
  }
}
