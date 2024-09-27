import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  model = {
    firstName : ""
  }

  userData = {
    firstName : 'Nouran'
  }
  countries : any
  governorates : any
  cities : any

  testForm = new FormGroup(
    {customer_first_name : new FormControl() ,
      country_id : new FormControl(),
      state_id : new FormControl(),
      city_id : new FormControl()
    }
  )


  constructor(private auth:AuthService){
    this.auth.getUserProfile().subscribe(res=>{
      console.log(res)
      let userData = res.data
      // this.testForm.controls.customer_first_name = res.data.customer_first_name

      this.testForm.patchValue(userData)
      // this.testForm.setValue(userData)
    })
    this.auth.getCountries().subscribe(res=>{
      console.log(res)
      this.countries = res.data
      
    })
  }
  stateSelect = true

  handleGovernate(eve : any){
    console.log(eve)
    console.log(this.testForm.controls.country_id.value)
    this.stateSelect = false
    this.auth.getGovernorate(eve.id).subscribe(res=>{
      this.governorates = res.data
    })
  }
  handleClear(){
    this.governorates = []
    this.stateSelect = true
    this.testForm.controls.state_id.patchValue('')
  }

  handleCities(eve : any){

  }

}
