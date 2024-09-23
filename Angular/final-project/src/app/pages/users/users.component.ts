import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users : any
  constructor(private global:GlobalService){
    // console.log(this.global.getUsers())
    this.global.getUsers().subscribe(res=>{
  
      this.users = res
    })
  }

}
