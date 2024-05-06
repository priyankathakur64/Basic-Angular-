import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {
  strdata:string="I'm leArning angUlar";
  mydate=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
