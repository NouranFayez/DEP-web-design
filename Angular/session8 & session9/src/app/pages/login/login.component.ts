import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSubmit = false
  title= 'Angular'
  loginForm = new FormGroup(
    {
      firstName : new FormControl("" , [Validators.required]),
      lastName : new FormControl("" , [Validators.required])
    }
  )

  handleSubmit(){
    this.isSubmit = true
  }

}
