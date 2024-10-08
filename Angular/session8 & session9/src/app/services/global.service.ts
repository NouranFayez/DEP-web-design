import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl = "http://techs-experts.net/public/api"
  constructor(private http : HttpClient) { }

  getTopCategories():Observable<any>{
    return this.http.get(`${this.baseUrl}/top-categories`)
  }

  getProductsByCategory(id:any) : Observable<any>{
    return this.http.get(`${this.baseUrl}/products-by-category/${id}/0/0`)
  }
  getGallery():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=200')
  }
}
