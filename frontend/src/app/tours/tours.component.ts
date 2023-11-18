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

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  tours: any[] = [];
  showNavbar: boolean = true;

  constructor(private tourService: TourService, private authService: AuthService, private userService: UsersService) {}

  ngOnInit(): void {
    this.loadTours();
    this.checkUserRole();
  }

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
        console.log('User role:', role);
  
        this.showNavbar = role !== 'admin';
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }
}
