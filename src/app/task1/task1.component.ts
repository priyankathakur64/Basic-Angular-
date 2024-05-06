import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(change:any){
    change.style.background="red";
    change.style.color="yellow";
  }

}
