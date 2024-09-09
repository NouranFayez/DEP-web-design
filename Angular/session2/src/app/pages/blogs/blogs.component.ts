import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  appName = "Angular"
  inputvalue = ""
  inputModelValue = ""
  alertClass = "alert alert-danger"
  alertBoolean = true
  alertBooleanBgColor = false
  backgroundColor = 'lightgray'
  model = {
    userName : "",
    userEmail : "",
    track:''
  }



  handleClick(){
    this.appName = 'Angular App'
  }

  handleInput(ele : any){
    console.log(ele)
    this.inputvalue = ele.value
  }

  handleFormClick(){
    console.log(this.model)
  }
}
