import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task11parent',
  templateUrl: './task11parent.component.html',
  styleUrls: ['./task11parent.component.css']
})
export class Task11parentComponent implements OnInit {
  rating:string='4';
  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.rating;
  }

}
