import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservices/note.service';

@Component({
  selector: 'app-iconscomponent',
  templateUrl: './iconscomponent.component.html',
  styleUrls: ['./iconscomponent.component.scss']
})
export class IconscomponentComponent implements OnInit {

  token: any

  constructor(public noteservice: NoteService) { }

  ngOnInit(): void {
  }

  Delete(note: any) {
    this.noteservice.trashnote(note).subscribe((response: any) => {
      console.log(response.data)})
  }
}
