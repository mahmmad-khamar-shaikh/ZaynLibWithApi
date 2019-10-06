import { Injectable } from '@angular/core';
import { IUser } from '../types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInUser: IUser;

  constructor() { }
  get User(): IUser {
    return this.loggedInUser;
  }
  set User(user: IUser) {
    this.loggedInUser = user;
  }
}
