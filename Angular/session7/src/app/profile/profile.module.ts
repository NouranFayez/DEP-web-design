import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddressComponent } from './address/address.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { UserImageComponent } from './user-image/user-image.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserProfileComponent,
    AddressComponent,
    UserImageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModuleModule,
    FormsModule 
  ]
})
export class ProfileModule { }
