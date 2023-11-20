// import { Component, OnInit } from '@angular/core';
// import { TourService } from '../services/tours.service';


// @Component({
//   selector: 'app-tours',
//   templateUrl: './tours.component.html',
//   styleUrls: ['./tours.component.css']
// })
// export class ToursComponent implements OnInit {
//   tours: any[] = [];

//   constructor(private tourService: TourService) {}

//   ngOnInit(): void {
//     this.loadTours();
//   }
//   loadTours() {
//     this.tourService.getTours().subscribe(
//       (data) => {
//         // Check if the data is an object with a 'tours' property
//         if (data && data.hasOwnProperty('tours') && Array.isArray(data.tours)) {
//           this.tours = data.tours;
//         } else {
//           console.error('Invalid API response format. Expected an object with a "tours" property.');
//         }
//       },
//       (error) => {
//         console.error('Error fetching tours', error);
//       }
//     );
//   }
  
  
// }



import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tours.service';
import { AuthService } from '../services/auth.service'; 
import { UsersService } from '../services/users.service';
import { AdminComponent } from '../dashboard/admin/admin.component';
import { NavbarService } from '../services/navbar.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  tours: any[] = [];
  showNavbar: boolean = true;

  constructor(private tourService: TourService,  private route: ActivatedRoute, private navbarService: NavbarService, private authService: AuthService, private userService: UsersService) {}

  ngOnInit(): void {
    this.loadTours();
    this.checkUserRole();

    this.navbarService.setShowNavbar(true);   }

  loadTours() {
    this.tourService.getTours().subscribe(
      (data) => {
        if (data && data.hasOwnProperty('tours') && Array.isArray(data.tours)) {
          this.tours = data.tours;
        } else {
          console.error('Invalid API response format. Expected an object with a "tours" property.');
        }
      },
      (error) => {
        console.error('Error fetching tours', error);
      }
    );
  }

  
  checkUserRole() {
    this.userService.checkDetails().subscribe(
      (role) => {
        // console.log('User role:', role);
  
        this.showNavbar = role !== 'admin';
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }


  checkUserRole1(): Observable<boolean> {
  return this.userService.checkDetails().pipe(
    map((role) => {
      // console.log('User role:', role);
      return role === 'user';
    })
  );
}
  
}

