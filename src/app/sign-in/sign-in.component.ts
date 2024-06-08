import { Component,NgModule,OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HomeComponent,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

    loginForm!: FormGroup;
    errorMessage: string = '';
  
    constructor(private fb: FormBuilder, private router: Router) { }
  
    ngOnInit(): void {
      this.initForm();
    }
  
    initForm() {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      });
    }
  
    // getEmail() {
    //   return this.loginForm.get('email');
    // }
  
    // getPassword() {
    //   return this.loginForm.get('password');
    // }
  
    login() {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      if (email!==''&&password!=='') {
        this.router.navigate(['Liste-Des-Email-Groupe']);
      } else {
        alert("Identifiants Incorrects")
      }
    }
  }

