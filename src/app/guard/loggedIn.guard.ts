import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { ConstName } from '../services/const-name.service';

@Injectable({
    providedIn: 'root'
})
export class loggedGuard implements CanActivate {

    constructor(
        private router: Router,
    ) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const UserRoleInfo = localStorage.getItem('adminInfo');

        if (UserRoleInfo) {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }
}
