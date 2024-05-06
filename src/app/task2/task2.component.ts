import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  Square(num:any){
    let n1=+num;
  
    this.result=n1*n1;
  }
  Cube(num:any){
    let n2=+num;
  
    this.result=n2*n2*n2;
  }

}
