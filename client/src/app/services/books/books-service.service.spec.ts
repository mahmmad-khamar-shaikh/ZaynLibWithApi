import { TestBed, inject } from '@angular/core/testing';

import { BooksService} from './books-service.service';

describe('BooksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksService]
    });
  });

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));
});
