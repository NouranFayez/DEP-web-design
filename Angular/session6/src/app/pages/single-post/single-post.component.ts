import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  singlePost : any
  posts : any
  // activated : ActivatedRoute
  constructor(private activated : ActivatedRoute , private global :GlobalService){
  console.log( this.activated.snapshot.paramMap.get("postId") )

  }
  ngOnInit(){
    let id = this.activated.snapshot.paramMap.get("postId")
    this.activated.paramMap.subscribe(params=>{
      console.log(params)
      let postId = params.get('postId')
      this.global.getSinglePost(postId).subscribe(res=>{
       this.singlePost = res
      })
    })
   this.global.getPosts().subscribe(res=>{
    this.posts = res
   })
  }

}
