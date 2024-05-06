import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task11child',
  templateUrl: './task11child.component.html',
  styleUrls: ['./task11child.component.css']
})
export class Task11childComponent implements OnInit {
  rating:number=0;
  @Input() parentData:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
