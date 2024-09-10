import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  num = 5
  arr = [0 , 1, 2, 3,4,5,6,7]
date = new Date()
  constructor(){
    // switch (this.num) {
    //   case 1: console.log(1)
        
    //     break;
    //     case 2: console.log(2)
        
    //     break;
    
    //   default:
    //     break;
    // }
  }

}
