import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  visible = true;
  loggedInTrue = localStorage.getItem('loggedIn');
  loggedIn = this.loggedInTrue === 'true';

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['']);
    localStorage.clear();
    console.log(localStorage.getItem('token'));
  }
}
