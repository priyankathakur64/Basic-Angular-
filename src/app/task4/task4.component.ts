import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  isHidden:boolean=true;
  onImg(){
    this.isHidden=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
