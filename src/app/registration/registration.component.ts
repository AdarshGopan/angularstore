import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm=new FormGroup(
    {
      "firstname":new FormControl("",Validators.required),
      "lastname":new FormControl("",Validators.required),
      "username":new FormControl("",Validators.required),
      "email":new FormControl("",Validators.required),
      "password":new FormControl("",Validators.required),

    }
  )
    get username()
    {
      return this.registrationForm.get("username")
    }
    get firstname()
    {
      return this.registrationForm.get("firstname")
    }
    get lastname()
    {
      return this.registrationForm.get("lastname")
    }
    get email()
    {
      return this.registrationForm.get("email")
    }
    get password()
    {
      return this.registrationForm.get("password")
    }
    signup()
    {
      console.log(this.registrationForm.value);
    }
}
