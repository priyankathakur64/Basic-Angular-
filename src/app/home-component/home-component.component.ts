import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  myid:number=9;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onPage1(){
    this.router.navigate(['/Page1']);
  }
  onPage2(){
    this.myid=8;
    this.router.navigate(['/Page2',this.myid]);
  }
  onFollower(){
    this.router.navigate(['/Follower']);
  }

}
