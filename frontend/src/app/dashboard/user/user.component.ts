
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tour, TourBooking } from 'src/app/interfaces/tour';
import { User, UserDetails } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { TourService } from 'src/app/services/tours.service';
import { UsersService } from 'src/app/services/users.service';
import { BookTourService } from '../../services/book-tour.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  userDetails!: UserDetails;
  visible = true
  notVisible=false
  loggedIn=true

  tours!: Tour[];

  bookedTours: TourBooking[] = [];
  userID!: string;
  selectedTourID!: string ;
  filter=''
  // selectedTourID: string = '3d5d6c71-77c8-49b2-8f8e-38f0b5a79fec'

  
  tourID! : string;
 
  constructor(private tourService: TourService,private authService: AuthService, private route: ActivatedRoute,private userService:UsersService,private bookTourService:BookTourService ,private formBuilder:FormBuilder) {
    
   
  }



  ngOnInit() {
 
    if (this.authService.isLoggedIn()) {
     
      this.authService.getUserDetails('').subscribe(
        (userDetails) => {
          this.userDetails = userDetails;
          this.userID = userDetails.userID;
          this.getTours();
          this.getBookedTours();
        },
        (error) => {
          console.error('Error getting user details:', error);
        }
      );
    }
  }
  
  getTours() {
    this.tourService.getTours().subscribe(
      (response) => {
        this.tours = response;
      },
      (error) => {
        console.error('Error fetching tours:', error);
      }
    );
  }


  loadTours(): void {
    this.tourService.getTours().subscribe(
      (tours) => {
        this.tours = tours;
      },
      (error) => {
        console.error('Error fetching tours:', error);
      }
    );
  }

  // selectTour(tourID: string) {
  //   this.selectedTourID = tourID;

  // }


  bookTour(tourID:string) {
    console.log('Before Book Tour:', this.tourID);
    this.selectedTourID = tourID;
    if (this.selectedTourID) {
    this.bookTourService.bookTour(this.selectedTourID).subscribe(
      (response: any) => {
        console.log('Tour booked successfully:', response);
        
      },
      (error: any) => {
        console.error('Error booking tour:', error);
        // Handle error, e.g., display error message
      }
    );
    }else {
      console.warn('No tour selected.');
    }
    console.log('After Book Tour:', this.selectedTourID);
  }
  // bookTour() {
  //     this.bookTourService.bookTour(this.tourID_,this.userID).subscribe(
  //       (response) => {
  //         console.log('Tour booked successfully:', response);
  //         this.getBookedTours();
  //       },
  //       (error) => {
  //         console.error('Error booking tour:', error);
  //       }
  //     );
   
  // }



  getBookedTours() {
    this.bookTourService.getBookedTours(this.userID).subscribe(
      (response: TourBooking[]) => {
        this.bookedTours = response;
        let bookedTours=this.bookedTours
        console.log(bookedTours[0]);
        
      },
      (error: any) => {
        console.error('Error fetching booked tours:', error);
      }
    );
  }

  searchForm = this.formBuilder.group({
    type: [''],
  });

  searchTours() {
    const type = this.searchForm.value.type;
    if (type) {
      this.tourService.searchToursByType(type).subscribe(
        (tours) => {
          this.tours = tours;
        },
        (error) => {
          console.error('Error fetching tours:', error);
        }
      );
    } else {
      this.getTours();
    }
  }

}
