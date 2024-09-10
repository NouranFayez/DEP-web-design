import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  users:any =[]

  handleUserData(data : any){
    // console.log(data)
    this.users.push(data)
  }

}
