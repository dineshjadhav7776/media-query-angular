import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string;

  userDB: any = [];


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private httpClient: HttpClient,

  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.httpClient.get("assets/usersDB.json").subscribe((data: any) => {
      this.userDB = data.users;
    })
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
      return;
    }
    else {
      let authentication = this.userDB.filter(user => {
        return (this.loginForm.value.email === user.email && this.loginForm.value.password === user.password);
      })
      if (authentication.length != 0) {
        localStorage.setItem('adminInfo', JSON.stringify(authentication));
        this.router.navigate(['/gallery-view']);
        // this.toaster.success('Login successfull !');
      } else {
        this.errorMessage = 'Username or Password does not match';
        this.submitted = false;
        return false
      }
    }
  }
}
