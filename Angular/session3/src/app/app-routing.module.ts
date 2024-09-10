import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  {path:'' , component: IndexComponent},
  {path:'posts' , component: PostsComponent},
  {path:'products' , component: ProductsComponent},
  {path:'users' , component: UsersListComponent},
  {path:'gallery' , component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
