import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {

  NotesArray:any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
