import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteservices/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  isSelected = false;
  isDeleted = false;
  isArchived = false;
  isPinned = false;
  newcolor: any
  hover: any
  @Output() colorevent = new EventEmitter<any>();
  @Output() takenoteevent = new EventEmitter<any>();

  predefinedcolors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ]

  noteForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private noteservice: NoteService) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      Title: [''],
      Body: ['', Validators.required],
    });
  }

  Select() {
    this.isSelected = true;
    this.hover = true;
  }

  close(noteForm: any) {
    if (this.noteForm.invalid) {
      this.isSelected = false;
      return
    }
    else {
      let note = {
        title:this.noteForm.value.title,
        body:this.noteForm.value.body,
        color:this.newcolor
      }
      this.noteservice.createnote(note).subscribe((response: any) => {
        console.log(response.data)
      })
    }
  }

  PinBlank() {
    this.isPinned = true;
    this.noteForm.value.Body = " ";
    var result = this.close(this.noteForm)
    this.PinNote(result)
  }

  PinNote(result: any) {
    this.noteservice.pinnote(result).subscribe((response: any) => {
      console.log(response)
    })
  }

  colevent(data: any) {
    this.colorevent.emit(' ');
  }

  takeevent(data: any) {
    this.takenoteevent.emit(' ');
  }
}