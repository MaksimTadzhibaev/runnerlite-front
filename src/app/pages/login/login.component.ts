import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

export const LOGIN_URL = 'login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup; 
  
  hide = true;

  isError: boolean = false;
  
  constructor(private titleService: Title,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) {
    this.titleService.setTitle("Login");
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  } 

  login() {
    const controls = this.loginForm.controls;
    if (this.loginForm.invalid) {
      Object.keys(controls)
        .forEach(cn => controls[cn].markAsTouched());
        return;
    }    
    this.auth.authenticate(this.loginForm.value.email, this.loginForm.value.password)
    .pipe(first())
    .subscribe(authResult => {
      this.isError = false;
      this.router.navigateByUrl('/');      
    }, error => {
      this.isError = true;      
      console.log(error);
    });
    
  }

}
