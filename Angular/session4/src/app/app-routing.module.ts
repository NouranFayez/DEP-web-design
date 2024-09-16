import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { UsersComponent } from './pages/users/users.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  {path:'about' , component:AboutComponent},
  {path:'posts' , component:BlogsComponent},
  {path:'users' , component:UsersComponent},
  {path:'register' , component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
