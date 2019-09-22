import { Injectable } from '@angular/core';
import { BooksService } from '../services/books/books-service.service';
import { Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
@Injectable()
export class BooksEffects {
  constructor(private bookService: BooksService, private actions$: Actions) {

  }
  loadBooks$ = this.actions$.pipe('BOOK_LOAD_ACTION', mergeMap((action) => {
    console.log(action);
   return this.bookService.getBooks().pipe(map((books) => {
      

    }));
  }));

}
