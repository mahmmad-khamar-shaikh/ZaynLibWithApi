import { EventEmitter } from '@angular/core';
import { BookAllocationType } from '../../types/customTypes';

export class EventService {
  bookAllocationService: EventEmitter<BookAllocationType> = new EventEmitter();
}
