import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { PostCommentsComponent } from './pages/post-comments/post-comments.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  {path:'contact' , component:ContactComponent},
  {path:'posts' , children:[
    {path:'' , component:PostsComponent },
    {path: ":postId" , component:SinglePostComponent}
  ]},
  // {path:'posts' , component:PostsComponent},
  // {path:'posts/:id' , component:SinglePostComponent},
  {path:"**" , component:ErrorComponent}
];
// posts/1

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    scrollPositionRestoration :'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
