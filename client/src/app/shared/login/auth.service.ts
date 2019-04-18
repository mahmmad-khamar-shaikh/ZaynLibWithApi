import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { IUser } from '../../types';
@Injectable()
export class AuthService {
    public loggedInUser: IUser;

    constructor(private router: Router) {

    }




    logout() {

    }
}


