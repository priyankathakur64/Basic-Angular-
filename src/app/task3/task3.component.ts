import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
 myclass:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(mychange:any){
    mychange.style.fontStyle="italic";
    mychange.style.color="red";

  }

}