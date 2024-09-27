import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getUserProfile() :Observable<any>{
    return this.http.get(`http://techs-experts.net/public/api/client/profile`)
  }

  getCountries():Observable<any>{
    return this.http.get(`http://techs-experts.net/public/api/countries`)
  }
  getGovernorate(id:any):Observable<any>{
    return this.http.get(`http://techs-experts.net/public/api/governorates/${id}`)
  }

  updateUserImage(body : any):Observable<any>{
    return this.http.post(`http://techs-experts.net/public/api/client/update-profile-image` , body )
  }
}
