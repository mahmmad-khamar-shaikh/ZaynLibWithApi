import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/login/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MessagingService } from '../shared/services/messaging.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {
  public isAdmin = false;
  message: BehaviorSubject<any>;
  public user: string;
  constructor(private router: Router,
    private _authService: AuthService,
    private _toastrService: ToastrService,
    private _pushNotificationService: MessagingService

  ) { }

  ngOnInit() {
    this.isAdmin = this._authService && this._authService.loggedInUser &&
      this._authService.loggedInUser.role && this._authService.loggedInUser.role.admin;
    this.user = this._authService.loggedInUser.Email;
  
    this.message = this._pushNotificationService.currentMessage;
    this.message.subscribe(data => {
      console.log('message received from serer ', data);
    });
  }
  logout() {
    this._toastrService.info('You are logout successfully.', 'Logout', { positionClass: 'toast-top-center' });
    this.router.navigate(['']);
  }
}
