import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBoardComponent } from './book-board.component';

describe('BookBoardComponent', () => {
  let component: BookBoardComponent;
  let fixture: ComponentFixture<BookBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
