import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  firstName = "Nouran"
  constructor(private http : HttpClient) { }

  // https://jsonplaceholder.typicode.com/users

  getUsers():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


}
