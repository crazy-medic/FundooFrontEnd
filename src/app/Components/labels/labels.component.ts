import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LabelService } from 'src/app/Services/label/label.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  selected: boolean = true
  edit: boolean = false
  deleteicon: boolean = true
  LabelList: any
  newlabelName: any
  labelName: any
  oldname: any
  labelform !: FormGroup

  constructor(private dialogRef: MatDialogRef<LabelsComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
   private labelservice: LabelService,private formbuilder:FormBuilder) {
    this.labelform = this.formbuilder.group({
      labelName:['',Validators.required]
    })
    console.log(data);
  }

  ngOnInit(): void {
    this.labelservice.getlabels().subscribe((response: any) => {
      console.log(response.data);
      this.LabelList = response.data;
      console.log(this.LabelList);
    })
  }

  hovered() {
    this.deleteicon = false
  }
  nothovered() {
    this.deleteicon = true
  }

  select() {
    this.selected = true
  }
  close() {
    this.selected = false
  }

  editing() {
    this.edit = true
  }
  doneedit() {
    this.edit = false
  }

  create() {
    if (this.labelform.invalid) {
      return;
    }
    this.labelservice.createlabel(this.labelform.value.labelName).subscribe((response: any) => {
      console.log(response);
    })
  }

  updatelabel(olddata: any, newdata: any) {
    if (this.labelName != this.data.labelName) {
      this.labelservice.updatelabel(olddata, newdata).subscribe((response: any) => {
        console.log(response);
      })
    }
  }

  deletelabel(data: any) {
    this.labelName = data.labelName
    this.labelservice.deletelabel(this.labelName).subscribe((response: any) => {
      console.log(response);
    })
  }
}
