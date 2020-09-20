import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../types/book.interfacce';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly bookBaseUrl = '../../mock-data/books-list.json';

  constructor(private httpClient: HttpClient) { }

  public loadBooks(): Observable<IBook[]> {
    console.log('service called');
    return this.httpClient.get<IBook[]>(this.bookBaseUrl);
  }
}
