import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private _activatedRoute: ActivatedRoute,
    private _toastrService: ToastrService,
    private _pushNotificationService: MessagingService

  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe((params) => {
      console.log('params &&&&&&&&&&&&&&&&&&&&&&&', params);
    });
    this._activatedRoute.queryParams.subscribe((qParams) => {
console.log('qparams', qParams);
    });
  }
  logout() {
    this._toastrService.info('You are logout successfully.', 'Logout', { positionClass: 'toast-top-center' });
    this.router.navigate(['']);
  }
}
