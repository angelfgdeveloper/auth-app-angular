import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }

      button {
        width: 200px;
        padding: 5px 10px;
        border: 1px solid #d7d7d7;
        border-radius: 10px;
      }

      button:hover {
        background-color: #d7d7d7;
      }
    `
  ]
})
export class DashboardComponent {

  get user() {
    return this.authService.user;
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  logout() {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

}
