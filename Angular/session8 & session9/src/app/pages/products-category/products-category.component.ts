import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.css'
})
export class ProductsCategoryComponent {

  constructor(private Activated : ActivatedRoute , private global : GlobalService , private router : Router){
    this.Activated.paramMap.subscribe(params=>{
      let id = params.get('catID')
     this.global.getProductsByCategory(id).subscribe(res=>{
      console.log(res)
     })
    })
  }

}
