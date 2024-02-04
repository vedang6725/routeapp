import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router, private formbuilder:FormBuilder,
    private authservice:AuthService){}
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username:[],
      password:[]
    })
  }
  
  login(){
    console.log(this.loginForm.value)
    this.authservice.login(this.loginForm.value.username, this.loginForm.value.password) 
    this.router.navigate(['/home']);
  }

}
