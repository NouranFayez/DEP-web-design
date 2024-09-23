import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts : any 
  constructor(private global : GlobalService){

  }
  ngOnInit(){
    this.global.getPosts().subscribe(res=>{
      console.log(res)
      this.posts = res
    })
  }

}
