import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { MatTableDataSource } from '@angular/material/table';
import { IBook } from 'src/app/types/book.interfacce';

import {BookService} from '../../services/book.service';
const defaultConfig = new MatBottomSheetConfig();
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  displayedColumns: string[] = ['Title', 'IsAvailable', 'View'];
  dataSource: MatTableDataSource<IBook>;
  expandedElement: IBook;
  bookCollection: IBook[];

  config: MatBottomSheetConfig = {
    hasBackdrop: defaultConfig.hasBackdrop,
    disableClose: true,
    backdropClass: defaultConfig.backdropClass,
    direction: 'ltr'
  };
  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.loadBooks().subscribe(data => {
      this.bookCollection = data;
      this.dataSource = new MatTableDataSource(this.bookCollection);
    });

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onChange(event, rowIdentifier) {
    this.openBottomSheet(rowIdentifier.Id);
  }
  openBottomSheet(rowIdentifier: any): void {

    this.config.data = rowIdentifier;
    // this.bottomSheet.open(BookAllocationBottomSheetComponent, this.config);
  }


}
