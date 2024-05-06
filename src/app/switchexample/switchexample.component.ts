import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchexample',
  templateUrl: './switchexample.component.html',
  styleUrls: ['./switchexample.component.css']
})
export class SwitchexampleComponent implements OnInit {
  choice:string='';
  onSend(colorname:string){
    this.choice=colorname.toLowerCase().trim();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
