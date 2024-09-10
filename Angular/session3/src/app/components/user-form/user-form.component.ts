import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  disabledInput = true
  inputValue = ''

  @Output() userData = new EventEmitter<any>()
  model ={
    name : '',
    email:''
  }

  handleSubmit(){
    // console.log(this.model)

    let modelData ={
      name : this.model.name,
      email : this.model.email
    }

    this.userData.emit(modelData)
  }


  constructor(){
  }
  
  ngOnInit(){
    // let input : any = document.getElementById('userName')
    // input.addEventListener('input' , function(e:any){
    //   console.log(e.target.value)
    // })

  }

  handleInput(ele :any){
    console.log(ele.value)
    this.inputValue = ele.value
  }

}
