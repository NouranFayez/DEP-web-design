import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private auth : AuthService){

   

  }

  handleProfile(){
    this.auth.profile().subscribe(res=>{
      console.log(res)
    })
  }

}
