import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsCategoryComponent } from './pages/products-category/products-category.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { canActivateGuard } from './guards/can-activate/can-activate.guard';
import { addLocalStorageItemGuard } from './guards/can-activate/add-local-storage-item.guard';
import { canDeactivateGuard } from './guards/can-activate/can-deactivate.guard';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryGuardComponent } from './pages/gallery-guard/gallery-guard.component';
import { ResolveService } from './services/resolve.service';
import { ParentComponent } from './pages/parent/parent.component';

const routes: Routes = [
  {path:'' , component : HomeComponent},
  {path:'category/:catID' , component:ProductsCategoryComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'parent' , component:ParentComponent},
  {path:'galleryGuard' , component:GalleryGuardComponent , resolve:{galleryData : ResolveService}},
  {path:'login' , component:LoginComponent , canDeactivate:[canDeactivateGuard] },
  {path:'profile' , component:ProfileComponent , canActivate:[canActivateGuard , addLocalStorageItemGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
