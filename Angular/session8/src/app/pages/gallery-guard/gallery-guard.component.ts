import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-guard',
  templateUrl: './gallery-guard.component.html',
  styleUrl: './gallery-guard.component.css'
})
export class GalleryGuardComponent {
  gallery :any
  flag = true
  constructor(private global:GlobalService , private activated : ActivatedRoute){
    this.gallery = this.activated.snapshot.data['galleryData']
    // this.global.getGallery().subscribe(res=>{
    //   this.gallery = res
    // },(e)=>{

    // },()=>{
    //   this.flag = false
    // })
  }

}
