import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  isHovered = false;
  
  constructor() { }
@Input() NotesArray:any
  ngOnInit(): void {
  }
  MouseIn() {
    this.isHovered = true;
  }
  MouseOut() {
    this.isHovered = false;
  }
}
