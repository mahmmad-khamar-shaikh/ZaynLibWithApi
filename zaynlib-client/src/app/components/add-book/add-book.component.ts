import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  public book = new Book();
  bookForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: [{ value: ' ', disabled: false }, Validators.required],
      category: [{ value: 'Programming', disabled: false }, Validators.required],
      author: ['', Validators.required],
      isAvailable: [{ value: true, disabled: false }]
    });


  }

  public addBook(): void {
    console.log(this.bookForm.value);
  }

}
