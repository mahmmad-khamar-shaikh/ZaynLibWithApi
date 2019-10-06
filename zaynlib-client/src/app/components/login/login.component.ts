import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }
  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }
  login() {
    console.log(this.loginFormGroup.get('userName').value);
    console.log(this.loginFormGroup.get('password').value);
    this.loginService.User = {
      email: this.loginFormGroup.get('userName').value,
      id: 1
    };
    this.router.navigate(['/dashboard']);

  }

}
