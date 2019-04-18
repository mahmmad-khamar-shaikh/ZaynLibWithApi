
import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { EventService } from '../shared/services/event-emitter.service';
@Component({
    selector: 'app-book-allocation-bottom-sheet',
    templateUrl: 'book-allocation-bottom-sheet.component.html',
})
export class BookAllocationBottomSheetComponent {
    constructor(private _bottomSheetRef: MatBottomSheetRef<BookAllocationBottomSheetComponent>,
        private _eventServiceRef: EventService) { }

    assignBook() {

        this._bottomSheetRef.dismiss();
        this._eventServiceRef.bookAllocationService.emit({
            bookRefToBeAllocated: this._bottomSheetRef.containerInstance.bottomSheetConfig.data,
            proceedWithAllocation: true
        });

    }
    cancelAssignBook() {
        this._bottomSheetRef.dismiss();
        this._eventServiceRef.bookAllocationService.emit({
            bookRefToBeAllocated: this._bottomSheetRef.containerInstance.bottomSheetConfig.data,
            proceedWithAllocation: false
        });
    }
}
