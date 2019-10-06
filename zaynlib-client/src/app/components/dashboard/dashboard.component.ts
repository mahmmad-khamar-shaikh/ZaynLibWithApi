import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';
import { IUser } from 'src/app/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public user: IUser;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.user = this.loginService.User;

  }
  logout() {
    this.router.navigate(['/home']);
  }

}
