import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { LoginComponent } from './shared/login/login.component';
import { AuthService } from './auth/auth.service';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { ManageDashboardComponent } from './manage-dashboard/manage-dashboard.component';
import { BookBoardComponent } from './book-board/book-board.component';
import { SignupComponent } from './shared/signup/signup.component';
/** Material component */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookBoardService } from './book-board/book-board.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material';
import { BookAllocationBottomSheetComponent } from './book-board/book-allocation-bottom-sheet.component';
import { EventService } from './shared/services/event-emitter.service';
import { PassRecoveryComponent } from './shared/pass-recovery/pass-recovery.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/library.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BookBoardVanilaComponent } from './book-board/book-board-vanila.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { CanActivateDashboardGuard } from './shared/guards/canActivateDashboard.guard';
import { MessagingService } from './shared/services/messaging.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  entryComponents: [BookAllocationBottomSheetComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashbaordComponent,
    ManageDashboardComponent,
    BookBoardComponent,
    BookBoardVanilaComponent,
    SignupComponent,
    UserProfileComponent,
    BookAllocationBottomSheetComponent,
    PassRecoveryComponent,
    BookDetailComponent,
    CallbackComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatSlideToggleModule,
    AppMaterialModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    StoreModule.forFeature('books', reducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ToastrModule.forRoot()
  ],
  providers: [AuthService,
    BookBoardService,
    EventService,
    CanActivateDashboardGuard,
    MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
