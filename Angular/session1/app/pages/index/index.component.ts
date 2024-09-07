import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  appTitle : string = "Angular App"
  isDisabled = false
  borderWidth = "border-5 border-danger"
  inputValue = ""
  getFirstName(){
    return `Ahmed`
  }

  getMaxNum(num1 : number , num2 : number , num3 : number){
    return Math.max(num1 , num2 , num3 )
  }

  handleClick(){
    console.log('click')
    this.borderWidth = "border-5 border-primary"
  }

  handleInput(e : any , ele : any){
    console.log(ele)
    this.inputValue = e.target.value
  }




}
