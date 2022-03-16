import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  isSelected = false;

  constructor() { }

  ngOnInit(): void {
  }
  Select() {
    this.isSelected = true;
  }
}