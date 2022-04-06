import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/Services/dataservice/dataservice.service';
import { LabelService } from 'src/app/Services/label/label.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  selected: boolean = true
  edit: boolean = false
  LabelList: any
  labelName: any
  editlabelname: any
  olddata: any
  labelform !: FormGroup
  updatelabelform !: FormGroup
  @Output() crudrefresh = new EventEmitter<any>();

  constructor(private dialogRef: MatDialogRef<LabelsComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private labelservice: LabelService, private formbuilder: FormBuilder, public dataservice: DataserviceService) {
    this.labelform = this.formbuilder.group({
      labelName: ['', Validators.required]
    })
    console.log(data);
    this.updatelabelform = this.formbuilder.group({
      editlabelname: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  select() {
    this.selected = true
  }
  close() {
    this.selected = false
  }

  editing() {
    this.edit = true
    console.log("editing on");

  }
  doneedit(label: any) {
    this.edit = false
    console.log("editing off");
    console.log(label.labelName, this.updatelabelform.value.editlabelname);
    if (label.labelName != this.updatelabelform.value.editlabelname) {
      this.updatelabel(label.labelName, this.updatelabelform.value.editlabelname);
      this.crudrefresh.emit('')
    }
  }

  create() {
    if (this.labelform.invalid) {
      return;
    }
    this.labelservice.createlabel(this.labelform.value.labelName).subscribe((response: any) => {
      console.log(response);
    })
    this.crudrefresh.emit('');
  }

  updatelabel(olddata: any, newdata: any) {
    console.log(olddata,newdata);
    if (newdata != null && olddata != newdata && newdata!='') {
      this.labelservice.updatelabel(olddata, newdata).subscribe((response: any) => {
        console.log(response);
      })
    }
    this.crudrefresh.emit('');
  }

  deletelabel(data: any) {
    this.labelName = data.labelName
    this.labelservice.deletelabel(this.labelName).subscribe((response: any) => {
      console.log(response);
    })
    this.crudrefresh.emit('');
  }
}
