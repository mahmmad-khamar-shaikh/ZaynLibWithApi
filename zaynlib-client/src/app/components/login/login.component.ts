import { Component, OnInit, OnChanges } from '@angular/core';
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
  public isError = false;
  public customErrorMessage: string;
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService) {
  }
  ngOnInit() {
    this.form = this.formBuilder.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  login() {
    // console.log(this.loginFormGroup.get('userName').value);
    // console.log(this.loginFormGroup.get('password').value);
    // this.loginService.User = {
    //   email: this.loginFormGroup.get('userName').value,
    //   id: 1
    // };
    this.router.navigate(['/dashboard']);
  }
  onSubmit() {
    // To be Implemented
  }

}
