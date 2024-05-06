import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2-component',
  templateUrl: './page2-component.component.html',
  styleUrls: ['./page2-component.component.css']
})
export class Page2ComponentComponent implements OnInit {
  myid:number=0;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }
  getDataFromUrl(){
    this.route.paramMap.subscribe((param:any)=>{
      this.myid=+param.get("id")
    })
  }

}
