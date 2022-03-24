import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
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

  showIcons: boolean=true

  constructor(public noteservice: NoteService, private dataservice: DataserviceService) { }

  predefinedcolors = [
    {
      name:'Red',colorcode:'#FF0000'
    },
    {
      name:'Blue',colorcode:'#00FF00'
    },
    {
      name:'Green',colorcode:'#0000FF'
    },
    {
      name:'White',colorcode:'#FFFFFF'
    },
    {
      name:'Light Voilet',colorcode:'#957EC1'
    },
    {
      name:'Funky Green',colorcode:'#1ACEB0'
    },
    {
      name:'Dark Blue',colorcode:'#250075'
    },
  ]

  ngOnInit(): void {
  }

  Delete() {
    this.noteservice.trashnote(this.notecarddata).subscribe((response: any) => {
      console.log(response)
      this.dataservice.sendData(response)
    })
  }

  Archive(){
    console.log(this.notecarddata);
    this.noteservice.archivenote(this.notecarddata).subscribe((response:any)=>{
      console.log(response);
    })
    window.location.reload();
  }

  Permadelete(){
    this.noteservice.permadelete(this.notecarddata).subscribe((response:any)=>{
      console.log(response);
    })
    window.location.reload();
  }
}
