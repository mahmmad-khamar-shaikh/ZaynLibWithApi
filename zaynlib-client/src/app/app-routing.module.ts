import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'login', component: LoginComponent },

      // { 'path': 'signup', component: SignupComponent },
      // { 'path': 'password', component: PassRecoveryComponent },
      { path: '', component: LoginComponent }
    ]
  },
  // { path: 'callback', component: CallbackComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'book', component: AddBookComponent },
    ]
  },

  // { 'path': 'book/:id', component: BookDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
