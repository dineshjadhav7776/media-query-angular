import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root',
})
export class ConstName {
    constructor(private router: Router) { }



    clearStorage() {
        localStorage.removeItem('userProfile');
        localStorage.removeItem('token');
        // localStorage.removeItem('adminToken');
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    checkUserLogin() {
        const checkUser = localStorage.getItem('adminInfo');
        const adminToken = localStorage.getItem('adminToken');
        const adminRoleInfo = localStorage.getItem('adminRoleInfo');
        if (checkUser && adminToken && adminRoleInfo) {
            const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
            if (adminInfo.role.slug === 'super_admin') {
                this.router.navigate(['/dashboard']);
            } else {
                this.clearStorage();
                this.router.navigate(['/login']);
                return false;
            }
        }
    }

    getAccessToken() {
        return {
            headers: new HttpHeaders({
                'httpx-thetatech-accesstoken': localStorage.getItem('adminToken'),
            }),
        };
    }

    forbidden(error: HttpErrorResponse) {
        if (error instanceof HttpErrorResponse) {
            if (error.status === 403) {
                // this.router.navigate(['forbidden']);
            } else if (error.status === 401) {
                this.clearStorage();
            }
        }
    }
}
