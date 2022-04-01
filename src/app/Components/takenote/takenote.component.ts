import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteservices/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  isSelected = false;
  isDeleted=false;
  isArchived=false;
  isPinned=false;
  hover:any

  noteForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private noteservice: NoteService) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      Title: ['',Validators.required],
      Body: ['', Validators.required],
    });
  }

  Select() {
    this.isSelected = true;
    this.hover=true;
  }

  close(noteForm:any) {
    if (this.noteForm.invalid) {
      this.isSelected = false;
      return
    }
    else {
      this.noteservice.createnote(this.noteForm.value).subscribe((response: any) => {
        return response.data.noteid
      })
    }
  }

  PinBlank(){
    this.isPinned=true;
    this.noteForm.value.Body=" ";
    var result = this.close(this.noteForm)
    this.PinNote(result)
  }

  PinNote(result:any){
    this.noteservice.pinnote(result).subscribe((response: any) => {
      console.log(response)
    })
  }
}