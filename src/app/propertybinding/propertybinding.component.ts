import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  name:string='Priyanka';
 
  url:string='../../assets/Body_IDS.jpg';

  isHidden:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
