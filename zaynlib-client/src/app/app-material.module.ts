import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule, MatBottomSheetModule, MatDividerModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatBottomSheetModule,
    MatDividerModule,
    MatInputModule,
    MatSlideToggleModule,
  ]
})
export class AppMaterialModule { }
