import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CanActivateDashboardGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router,
    private _toastrService: ToastrService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (true  ) {
      return true;
    } else {
      this._router.navigate(['/home'], {
        // queryParams: {
        //   return: state.url
        // }
      });
      this._toastrService.error('You have to login for browsing books', 'Login Required !',
        { positionClass: 'toast-top-center' });
      return false;
    }

  }

}
