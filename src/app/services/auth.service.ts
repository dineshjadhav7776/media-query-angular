import { Injectable } from '@angular/core';
import { ConstName } from './const-name.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userProfileSubject = new Subject<any>();

    constructor(
        private http: HttpClient,
        private constant: ConstName
    ) { }

    login(data) {
        if (data.email == 'dinesh' && data.password == '123456') {
            return true;
        } else {
            return false;
        }
    }
}
