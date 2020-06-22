import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/types/book.interfacce';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public bookList$: Observable<IBook[]>;
  cols: any[];

  constructor(private bookService: BookService) {
    this.cols = [
      { field: 'Title', header: 'Title' },
      { field: 'Author', header: 'Author' },
      { field: 'Assignee', header: 'Assignee' },
      { field: 'IsAvailable', header: 'IsAvailable' },
      { field: 'Owner', header: 'Owner' }
    ];
  }

  ngOnInit() {
    this.bookList$ = this.bookService.loadBooks();
  }



}
