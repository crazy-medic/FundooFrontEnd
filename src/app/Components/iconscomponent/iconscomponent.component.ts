import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';
import { NoteService } from 'src/app/Services/noteservices/note.service';

@Component({
  selector: 'app-iconscomponent',
  templateUrl: './iconscomponent.component.html',
  styleUrls: ['./iconscomponent.component.scss']
})
export class IconscomponentComponent implements OnInit {

  @Input() notecarddata: any
  @Output() changecolor = new EventEmitter<any>();
  @Output() deleterefresh = new EventEmitter<any>();
  @Output() archiverefresh = new EventEmitter<any>();

  showIcons: boolean = true

  constructor(public noteservice: NoteService, private dataservice: DataserviceService,private router:Router) { }

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

  ngOnInit(): void {
  }

  Delete() {
    this.noteservice.trashnote(this.notecarddata).subscribe((response: any) => {
      console.log(response)
      this.dataservice.sendData(response)
    })
    this.deleterefresh.emit(Response)
  }

  Archive() {
    console.log(this.notecarddata);
    this.noteservice.archivenote(this.notecarddata).subscribe((response: any) => {
      console.log(response);
    })
    this.archiverefresh.emit(Response)
  }

  Permadelete() {
    this.noteservice.permadelete(this.notecarddata).subscribe((response: any) => {
      console.log(response);
    })
    
  }

  colorselect(color: any) {
    this.notecarddata.color = color
    console.log(this.notecarddata.color);
    this.noteservice.colorChange(this.notecarddata).subscribe((response: any) => {
      console.log(response);
      this.changecolor.emit(color)
    })
  }
}
