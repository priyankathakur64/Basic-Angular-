import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component implements OnInit {
  result!:number;
  isPrime(num:any){
    let n=+num;
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
