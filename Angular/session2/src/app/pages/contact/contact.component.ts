import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  appName = 'Angular'

  arr :any  =[]

  promptValue : string | null = prompt()

  localStorageItem : any = (localStorage.getItem('userName')) ? localStorage.getItem('userName') : null

  constructor(){
    // console.log('contact class')

    // if(localStorage.getItem('userName')) this.localStorageItem = localStorage.getItem('userName')
    //   else this.localStorageItem = null

    console.log(this.localStorageItem)
  }

  handlePush(){
    this.arr.push('angular')
  }

  handleAddItem(){
    localStorage.setItem('userName' , 'Zain')
  }

}
