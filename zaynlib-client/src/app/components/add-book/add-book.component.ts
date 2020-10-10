import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ISelectionOption } from '../../types/customTypes';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert = 'This field is required';
  post: any = '';
  bookCategory: ISelectionOption[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    // this.setChangeValidate();
    this.setBookCategory();
  }

  createForm() {
    // tslint:disable-next-line: max-line-length

    this.formGroup = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      category: [null, Validators.required],
      author: [null, Validators.required],
      isAvailable: [null]
      // email: [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
    });
  }
  setBookCategory() {

    this.bookCategory = [
      { label: 'Programming', value: 'programming' },
      { label: 'Science', value: 'science' },
      { label: 'Cloud Computing', value: 'cloud_computing' }];

  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    );
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  checkPassword(control) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    const db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        const result = (db.indexOf(control.value) !== -1) ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    // tslint:disable-next-line: max-line-length
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      // tslint:disable-next-line: max-line-length
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post) {
    this.post = post;
  }

}
