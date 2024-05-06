import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { ClassbindingsComponent } from './classbindings/classbindings.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { FormsModule } from '@angular/forms';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { SwitchexampleComponent } from './switchexample/switchexample.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Task5Component } from './task5/task5.component';
import { Task9Component } from './task9/task9.component';
import { Task4Component } from './task4/task4.component';
import { Task6Component } from './task6/task6.component';
import { Task8Component } from './task8/task8.component';
import { InbuiltpipeComponent } from './inbuiltpipe/inbuiltpipe.component';
import { SummaryPipe } from './utility/summary.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { Task11parentComponent } from './task11parent/task11parent.component';
import { Task11childComponent } from './task11child/task11child.component';
import { CourseComponent } from './course/course.component';
import { courseService } from './utility/course.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { Page1ComponentComponent } from './page1/page1-component.component';
import { Page2ComponentComponent } from './page2-component/page2-component.component';
import { FollowerComponent } from './follower/follower.component';
import { MyFollowerComponent } from './my-follower/my-follower.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DemotdfComponent } from './demotdf/demotdf.component';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent, StudentComponent, StylebindingComponent, ClassbindingComponent, ClassbindingsComponent, StringinterpolationComponent, PropertybindingComponent, Eventbinding1Component, TemplateRefVarComponent, Eventbinding2Component, StructuraldirectiveComponent, Task1Component, Task2Component, Task3Component, SwitchexampleComponent, Parent1Component, Child1Component, Child2Component, Parent2Component, Task5Component, Task9Component, Task4Component, Task6Component, Task8Component, InbuiltpipeComponent, SummaryPipe, CustompipeComponent, Task11parentComponent, Task11childComponent, CourseComponent, PostComponent, Page1ComponentComponent, Page2ComponentComponent, FollowerComponent, MyFollowerComponent, HomeComponentComponent, NotFoundComponent, DemotdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule
  ],
  providers: [courseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
