import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbindings',
  templateUrl: './classbindings.component.html',
  styleUrls: ['./classbindings.component.css']
})
export class ClassbindingsComponent implements OnInit {
  myclass:string="success";
  rating:number=2;
  isError:boolean=true;
  isSpecial:boolean=true;

  jsonObj={
    "success":!this.isError,
    "danger": this.isError,
    "special": true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
