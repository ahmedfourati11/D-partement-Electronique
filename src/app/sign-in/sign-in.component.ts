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
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    getEmail() {
      return this.loginForm.get('email');
    }
  
    getPassword() {
      return this.loginForm.get('password');
    }
  
    login() {
      if (this.loginForm.valid) {
        // const email = this.loginForm.get('email')?.value;
        // const password = this.loginForm.get('password')?.value;
        // this.authservice.signInUser(email, password).then(
        //   () => {
        //     this.router.navigate(['/users']);
        //   },
        //   (error) => {
        //     this.errorMessage = error;
        //   }
        // );
        this.router.navigate(['home']);
      } else {
        this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      }
    }
  }

