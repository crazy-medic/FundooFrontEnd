import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteservices/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  isSelected = false;
  noteForm !: FormGroup;
  constructor(private formBuilder: FormBuilder,private noteservice: NoteService) { }

  ngOnInit(): void {
      this.noteForm = this.formBuilder.group({
        Title:[''],
        Body:['']
      });
    }
  
  Select() {
    this.isSelected = true;
  }

  close(){
    if (this.noteForm.invalid) {
      this.isSelected=false;
      return
    }
    else{
      this.noteservice.createnote(this.noteForm.value).subscribe((response:any)=>{
        console.log(response);
      })
    }
  }

  Cancel(){
    this.isSelected=false;
  }
}