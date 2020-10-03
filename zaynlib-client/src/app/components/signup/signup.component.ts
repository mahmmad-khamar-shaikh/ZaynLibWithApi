import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public isError = false;
  public customErrorMessage: string;
  form: FormGroup;
  private formSubmitAttempt: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );

  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    this.formSubmitAttempt = true;             // {8}
  }
}
