import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {
  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick():void{
    if(this.count==0){
    console.log("click event occured")
    this.count++;
  }
  }

  onImgClick():void{
    console.log("Image click")
  }

  onDollarEvent(myevent:any){
    console.log(myevent);

  }
}
