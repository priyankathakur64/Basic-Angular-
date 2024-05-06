import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  templateUrl: './structuraldirective.component.html',
  styleUrls: ['./structuraldirective.component.css']
})
export class StructuraldirectiveComponent implements OnInit {
  rating:number=1;
  course:string[]=["core Java","HTML","CSS"];

  constructor() { }

  ngOnInit(): void {
  }
  arrproduct=[
    {
        name:"iPhone",
        price:125000,
        qty:1
    },
    {
        name:"Redmi",
        price:10999,
        qty:4
    },
    {
        name:"Samsung",
        price:32560,
        qty:2
    }]

}
