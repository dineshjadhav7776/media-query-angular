import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstName } from 'src/app/services/const-name.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userProfile;

  constructor(private constant: ConstName,
    private router: Router) { }

  ngOnInit(): void {
    this.userProfile = JSON.parse(localStorage.getItem('adminInfo'));
  }

  onLogout() {
    $('#logoutModal').modal('hide');
    this.constant.clearStorage();
    this.router.navigate(['/login']);
  }

  onConfirmLogout() {
    $('#logoutModal').modal('show');
  }

}
