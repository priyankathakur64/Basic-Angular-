import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  mycolor:string="blue";
  rating:number=24;
  bgcolor:string="aqua";
  change:number=3;
  jsonObj={
    color:"coral",
    "font-family": "cursive",
    "font-size": "32px"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
