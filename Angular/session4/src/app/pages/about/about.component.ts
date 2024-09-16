import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private global : GlobalService){}

  currentDate = new Date()

  posts =[
    {title:'post title 1' , description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!'},
    {title:'post title 2' , description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!'},
    {title:'post title 3' , description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!'},
    {title:'post title 4' , description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!'},
    {title:'post title 5' , description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!'},
    {title:'post title 6' , description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!'},
    {title:'post title 7' , description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!'},
  ]

  handleName(){
    this.global.firstName = 'Zain'
  }

}
