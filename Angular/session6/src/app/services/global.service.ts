import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?_limit=30`)
  }

  getSinglePost(id:any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
