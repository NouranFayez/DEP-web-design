import { Component } from '@angular/core';
import { Register } from '../../Interfaces/register';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model : Register = {
    userName : '',
    userEmail : '',
    userPassword : ''

  }

  handleSubmit(form : NgForm){
    if(form.valid){
      console.log(form)

    }

  }

}
