import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddressComponent } from './address/address.component';
import { UserImageComponent } from './user-image/user-image.component';

const routes: Routes = [
  { path: '', component: ProfileComponent ,children:[
    {path : '' , component:UserProfileComponent},
    {path : 'user-address' , component:AddressComponent},
    {path : 'user-image' , component:UserImageComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
