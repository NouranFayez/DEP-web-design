import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  gallery :any
  flag = true
  constructor(private global:GlobalService){
    this.global.getGallery().subscribe(res=>{
      this.gallery = res
    },(e)=>{

    },()=>{
      this.flag = false
    })
  }

}
