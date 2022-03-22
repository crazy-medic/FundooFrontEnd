import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.scss']
})
export class UpdatedialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { console.log(data);
  }

  ngOnInit(): void {    
  }
  
}
