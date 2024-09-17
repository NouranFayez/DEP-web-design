import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // email , password 

  loginForm = new FormGroup({
    email : new FormControl("" , [Validators.required , Validators.email , Validators.minLength(15)]) ,
    password : new FormControl(null , [Validators.required ]) // Validators.pattern("^[A-Za-z]+$")
  })
  isSubmitted = false

  get userData(){return this.loginForm.controls}
  get userPassword(){return this.loginForm.controls.password}
  errorMsg = null

  constructor(private auth : AuthService , private router : Router , private global : GlobalService){}
  handleSubmit(){
    this.isSubmitted = true
    if(this.loginForm.valid){
      // subscribe ==> response  , error , completed
      this.auth.login(this.loginForm.value).subscribe(res=>{
        if(res.status == 'Success'){
          console.log('success')
          localStorage.setItem('userToken' , res.data.token)
          localStorage.setItem('userName' , `${res.data.first_name} ${res.data.last_name}`)
          this.global.isLogin = true
          this.router.navigateByUrl('/')
        }
        // console.log(res)
      }, (err)=>{
        console.log(err.error.message)
        this.errorMsg = err.error.message
      },()=>{

      })
      // console.log(this.loginForm)


    }
  }

}
