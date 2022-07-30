import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  logout() {
    this.router.navigateByUrl('/auth');
  }

}
