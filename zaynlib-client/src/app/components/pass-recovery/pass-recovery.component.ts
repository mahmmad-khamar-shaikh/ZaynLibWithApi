import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pass-recovery',
  templateUrl: './pass-recovery.component.html',
  styleUrls: ['./pass-recovery.component.css']
})
export class PassRecoveryComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  public customErrorMessage: string;
  public isError = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
}
