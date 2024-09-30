import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories : any
  constructor(private global : GlobalService){}

  ngOnInit(){
    this.global.getTopCategories().subscribe(res=>{
      this.categories = res.data
    })
  }

}
