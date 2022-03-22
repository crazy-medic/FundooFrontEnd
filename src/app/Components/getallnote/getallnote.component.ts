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
      console.log(response.data);
      this.NotesArray = response.data;
    })
  }
}
