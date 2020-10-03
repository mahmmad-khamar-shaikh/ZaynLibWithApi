import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { SubscribersComponent } from './components/suscribers/subscribers.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { TableModule } from 'primeng/table';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { InputSwitchModule } from 'primeng/inputswitch';
import {ButtonModule} from 'primeng/button';
import { SubscriptionDetailComponent } from './components/subscription-detail/subscription-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { SignupComponent } from './components/signup/signup.component';
import { PassRecoveryComponent } from './components/pass-recovery/pass-recovery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AddBookComponent,
    SubscribersComponent,
    BookListComponent,
    SubscriptionDetailComponent,
    SignupComponent,
    PassRecoveryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    TableModule,
    HttpClientModule,
    InputSwitchModule,
    ButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
