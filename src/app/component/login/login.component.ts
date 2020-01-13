import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkoutForm:any;
  ErrorLogin=false;

  ngOnInit() {
  }
  constructor(private loginService:LoginService,private formBuilder: FormBuilder,private router: Router) {
    if(this.loginService.isLoggedin()){
      this.router.navigate(['/user/profile'])
    }
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }



  onSubmit(customerData) {
    // Process checkout data here

    this.loginService.LogIn(this.checkoutForm.get("email").value,this.checkoutForm.get("password").value)
    if(!this.loginService.isLoggedin())
      this.ErrorLogin=true;
  }

}
