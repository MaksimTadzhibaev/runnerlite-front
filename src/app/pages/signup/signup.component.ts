import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/helpers/confirmed.validator';
import { SignupDto } from 'src/app/model/signup-dto';
import { AuthService } from 'src/app/services/auth.service';
import { LOGIN_URL } from '../login/login.component';

export const SIGNUP_URL = 'signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: any;  

  constructor(    
    private formBuilder: FormBuilder,    
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();    
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      nickName: [],
      team: this.formBuilder.group({
        city: ['', [
          Validators.required
        ]],
        team: ['', [
          Validators.required
        ]]
      }),      
      phone: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      birthday: ['', [
        Validators.required
      ]],
      sex: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      rePass: ['', [
        Validators.required
      ]]
    }, {
      validator: ConfirmedValidator('password', 'rePass')
    });    
  }  

  isControlInvalid(controlName: string): boolean {
    const control = this.signupForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  touched(fg: FormGroup) {
    const controls = fg.controls;
    Object.keys(controls)
        .forEach(controlName => {
          if (controls[controlName] instanceof FormGroup) {
            this.touched(controls[controlName] as FormGroup);
          } else {
            controls[controlName].markAsTouched()
          }
        });    
  }

  onSubmit() : void {   
    if (this.signupForm.invalid) {
      this.touched(this.signupForm);
      return;
    }    
    let signup = new SignupDto(
      0,
      this.signupForm.value.email,
      this.signupForm.value.fullName,
      this.signupForm.value.password,
      this.signupForm.value.nickName,
      this.signupForm.value.phone,
      true,
      false,
      this.signupForm.value.team.team.id,
      this.signupForm.value.birthday,
      this.signupForm.value.sex
    );
    this.authService.signUp(signup).subscribe(r => {
      this.router.navigateByUrl(LOGIN_URL);
    }, error => {
      if (error.error.includes(this.signupForm.value.email)) {
        this.signupForm.controls['email'].setErrors({notUnique: true});
      }
      if (error.error.includes(this.signupForm.value.nickName)) {
        this.signupForm.controls['nickName'].setErrors({notUnique: true});
      }
      console.log(error);
    });    
  }

}
