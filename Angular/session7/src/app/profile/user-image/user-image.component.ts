import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css'
})
export class UserImageComponent {
  model ={
    img : ""
  }

  handleSubmit(){

  }

  constructor(private auth : AuthService){}

  handleImage(eve : any){
    console.log(eve)
    let img = eve.target.files[0]

    let formData = new FormData()
    formData.append('image' , img)
    formData.append('firstrName' , 'nouran')
    this.auth.updateUserImage(formData).subscribe(res=>{
      console.log(res)
    })

  }

}
