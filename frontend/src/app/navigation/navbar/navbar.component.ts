// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNavbar: boolean = true;

  constructor(private router: Router, private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.showNavbar$.subscribe((value) => {
      this.showNavbar = value;
    });
  }

  // ngOnInit() {
  //   this.navbarService.showNavbar$.subscribe((value) => {
  //     console.log('Navbar visibility:', value);
  //     this.showNavbar = value;
  //   });
  // }
  

  visible = true;
  loggedInTrue = localStorage.getItem('loggedIn');
  loggedIn = this
  .loggedInTrue === 'true';

  // constructor(private router: Router) {}

  logout() {
    this.router.navigate(['']);
    localStorage.clear();
    console.log(localStorage.getItem('token'));
  }
}

