import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() { }
  public getBooks(): Observable<any>[] {
    return Observable.create([]);
  }
}
