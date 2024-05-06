import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() childStrEvent=new EventEmitter();

  @Output() childArrNameEvent=new EventEmitter();
  
  arrName=[
    {
      id:17569,
      name:'Priyanka',
      city:'Mumbai'
    },
    {
      id:245622,
      name:'Rohit',
      city:'Nagpur'
    },
    {
      id:31522,
      name:'Aman',
      city:'Pune'
    },
  ];

  strdata:string="hope u r enjoying..!!";

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.childStrEvent.emit(this.strdata)
    this.childArrNameEvent.emit(this.arrName);

  }

}
