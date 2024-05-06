import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {
result!:number;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    console.log("Change event occur");
  }

  onKeyup(myinput:any){
    console.log(myinput.value);
  }

  onKeydown(){
    console.log("Keydown event occur");
  }

}
