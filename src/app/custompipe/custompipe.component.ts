import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  strDetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum quam iure suscipit cum blanditiis eligendi fugiat beatae iusto atque doloremque ea amet maxime, accusamus laborum eveniet magni officiis assumenda."

  constructor() { }

  ngOnInit(): void {
  }

}
