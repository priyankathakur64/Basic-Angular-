import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1ComponentComponent } from './page1/page1-component.component';
import { Page2ComponentComponent } from './page2-component/page2-component.component';
import { FollowerComponent } from './follower/follower.component';
import { MyFollowerComponent } from './my-follower/my-follower.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:"",component:HomeComponentComponent
  },
  {
    path:"Page1",component:Page1ComponentComponent
  },
  {
    path:"Page2/:id",component:Page2ComponentComponent
  },
  {
    path:"Follower",component:FollowerComponent
  },
  {
    path:"MyFollower",component:MyFollowerComponent
  },
  {
    path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)
  },
  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
