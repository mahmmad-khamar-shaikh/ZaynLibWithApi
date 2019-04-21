import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/login/auth.service';
import { Roles } from '../types/customTypes';
import { IRoles } from 'src/app/types/roles.interface';

@Component({
  selector: 'app-manage-dashboard',
  templateUrl: './manage-dashboard.component.html',
  styleUrls: ['./manage-dashboard.component.css']
})
export class ManageDashboardComponent implements OnInit {
  public roles: IRoles;
  constructor() { }

  ngOnInit() {

  }

}
