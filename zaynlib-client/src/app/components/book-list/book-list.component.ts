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
      { field: 'Title', header: 'Title', width : '63%' },
      { field: 'IsAvailable', header: 'Available', width : '22%' },
      { field: 'Id', header: 'Detail', width : '16%' }
    ];
  }

  ngOnInit() {
    this.bookList$ = this.bookService.loadBooks();
  }



}
