import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { AuthService } from '../../service/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //private http = inject(HttpClient)
  private authService=inject(AuthService)
  private router = inject(Router)

  loginForm=new FormGroup({
    email:new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required)
  })

  funIngresar(){
    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res)=>{
        console.log(res)
        this.router.navigate(["/admin"])
      },
      (error)=>{
        console.log(error)
      }
    )
    //alert("Ingresando...")
  }
}
