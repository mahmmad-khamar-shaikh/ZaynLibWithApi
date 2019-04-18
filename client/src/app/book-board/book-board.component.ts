import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatBottomSheet, MatBottomSheetConfig } from '@angular/material';
import { IBook } from '../types/book.interfacce';
import { animate, state, style, transition, trigger } from '@angular/animations';

import 'rxjs/add/operator/map';
import { AuthService } from '../shared/login/auth.service';
import { BookBoardService } from './book-board.service';
import { BookAllocationBottomSheetComponent } from './book-allocation-bottom-sheet.component';
import { EventService } from '../shared/services/event-emitter.service';
import { BookAllocationType } from '../types/customTypes';
const defaultConfig = new MatBottomSheetConfig();
@Component({
  selector: 'app-book-board',
  templateUrl: './book-board.component.html',
  styleUrls: ['./book-board.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BookBoardComponent implements OnInit {
  public myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  displayedColumns: string[] = ['Id', 'title', 'isAvailable'];
  dataSource: MatTableDataSource<IBook>;
  expandedElement: IBook;
  bookCollection: IBook[];

  config: MatBottomSheetConfig = {
    hasBackdrop: defaultConfig.hasBackdrop,
    disableClose: true,
    backdropClass: defaultConfig.backdropClass,
    direction: 'ltr'
  };
  constructor(private _bookBoardService: BookBoardService,
    private _authService: AuthService,
    private bottomSheet: MatBottomSheet,
    private _bookAllocationEventServiceRef: EventService) { }

  ngOnInit() {
    // this.booksCollection = this._asfServiceReference.collection('books', ref => ref.orderBy('Id'));
    // this.books = this.booksCollection.valueChanges();
    // this._bookBoardService.loadBookData().subscribe(data => {
    //   this.bookCollection = data;
    //   console.log('book data arrived ', this.bookCollection);
    //   this.dataSource = new MatTableDataSource(this.bookCollection);

    // });

    // this._bookAllocationEventServiceRef.bookAllocationService
    //   .subscribe((payLoad: BookAllocationType) => {
    //     this.bookCollection.map((selectedBookItem: IBook) => {
    //       if (selectedBookItem.Id === payLoad.bookRefToBeAllocated) {
    //         selectedBookItem.IsAvailable = !payLoad.proceedWithAllocation;
    //       }
    //     });
    //     this.dataSource = new MatTableDataSource(this.bookCollection);
    //     this._bookBoardService.updateBookData(this.bookCollection.find((book) => {
    //       return book.Id === payLoad.bookRefToBeAllocated;
    //     }), this._authService.loggedInUser.Email);
    //     console.log('after modification ', this.bookCollection);
    //   });


  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onChange(_event, rowIdentifier) {
    this.openBottomSheet(rowIdentifier.Id);
  }
  openBottomSheet(_rowIdentifier: any): void {

    this.config.data = _rowIdentifier;
    this.bottomSheet.open(BookAllocationBottomSheetComponent, this.config);
  }
}
