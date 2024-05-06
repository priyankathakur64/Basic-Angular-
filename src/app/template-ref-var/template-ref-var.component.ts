import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent implements OnInit {
result!:number;
name:string=' ';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(myinput:any){
    console.log(myinput);
    console.log(myinput.value);
    myinput.style.background="green";
    myinput.style.color="white";
  }
//to get only values
  onClick1(myvalue:string){
    console.log(myvalue);
   
  }

  onAddition(num1:any,num2:any){
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
  }

}
