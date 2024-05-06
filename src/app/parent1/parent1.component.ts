import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  strname:string="Welcome to angular";
  jsonObj={
    id:1,
    name:'Priyanka',
    city:'Mumbai'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
/*
  arr=[
    {
      id:1,
      name:'Priyanka',
      city:'Mumbai'
    },
    {
      id:2,
      name:'Rohit',
      city:'Nagpur'
    },
    {
      id:3,
      name:'Aman',
      city:'Pune'
    },
  ]
*/
