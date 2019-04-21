import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { PassRecoveryComponent } from './shared/pass-recovery/pass-recovery.component';
import { BookBoardVanilaComponent } from './book-board/book-board-vanila.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CanActivateDashboardGuard } from './shared/guards/canActivateDashboard.guard';
import { CallbackComponent } from './callback/callback.component';

export const routes = [
    {
        'path': 'home', component: HomeComponent, children: [
            { 'path': 'login', component: LoginComponent },
            { 'path': 'signup', component: SignupComponent },
            { 'path': 'password', component: PassRecoveryComponent },
            { 'path': '', component: LoginComponent }

        ]
    },
    { path: 'callback', component: CallbackComponent },
    { 'path': 'dashboard', component: DashbaordComponent, canActivate: [CanActivateDashboardGuard] },
    { 'path': 'book/:id', component: BookDetailComponent },
    { 'path': '', redirectTo: 'home', pathMatch: 'full' },
    { 'path': '**', component: PageNotFoundComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
