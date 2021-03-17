import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { ConstName } from '../services/const-name.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private constNameService: ConstName,
        // private toaster: ToastrService
    ) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const UserRoleInfo = localStorage.getItem('adminInfo');

        if (UserRoleInfo) {
            return true;
        } else {
            // this.toaster.warning('You have to login first !')
            alert('login first')
            this.constNameService.clearStorage();
            this.router.navigate(['/login']);
            return false;
        }
    }
}
