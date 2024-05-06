import { Component, OnInit } from '@angular/core';
import { courseService } from '../utility/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:string[]=[];

  constructor(private service:courseService) { 
    //let service = new courseService();
    //service.getCourse();
   // this.courses = service.getCourse();
  }

  ngOnInit(): void {
    this.courses = this.service.getCourse();
  }

}
