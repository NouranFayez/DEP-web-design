import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports :[
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ]

})
export class SharedModuleModule { }
