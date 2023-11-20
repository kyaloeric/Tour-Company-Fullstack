import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tours.service';
import { Tour } from '../interfaces/tour';
import { User } from '../interfaces/user';
import { ReviewService } from '../services/review.service';
import { Review } from '../interfaces/review';
import { AuthService } from '../services/auth.service';
import { forkJoin, mergeMap, of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  tours: any[] = [];
  reviews: any[] = []; 
  token: string = '';


    constructor( private reviewService:ReviewService ,private tourService:TourService, private authService: AuthService){}

    ngOnInit() {
      this.loadTours();
      this.loadReviews();
            
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


  getReviews() {
    this.reviewService.getReviews().subscribe(
      (response) => {
        this.reviews = response;
      },
      (error) => {
        console.error('Error fetching tours:', error);
      }
    );
  }



  loadReviews() {
    this.reviewService.getReviews().subscribe(
      (data) => {
        if (data && data.hasOwnProperty('reviews') && Array.isArray(data.reviews)) {
          this.reviews = data.reviews;
        } else {
          console.error('Invalid API response format. Expected an object with a "reviews" property.');
        }
      },
      (error) => {
        console.error('Error fetching tours', error);
      }
    );
  }



  // loadReviews(): void {
  //   this.reviewService.getReviews().subscribe(
  //     (reviews) => {
  //       this.reviews = reviews;
  //     },
  //     (error) => {
  //       console.error('Error fetching reviews:', error);
  //     }
  //   );
  // }

  
  // loadReviews(): void {
  //   this.reviewService.getReviews().subscribe(
  //     (reviews) => {
  //       const userID = reviews.map(review => review.userID);
  
  //       // Fetch user details for all user IDs
  //       this.authService.getUserDetails(userID).subscribe(
  //         (userDetails) => {
  //           // Combine reviews and user details
  //           this.reviews = reviews.map((review: any) => ({
  //             ...review,
  //             userDetails: userDetails.find((user: any) => user.userID === review.userID),
  //           }));
            
  //           // Log the combined data to the console for debugging
  //           console.log(this.reviews);
  //         },
  //         (error) => {
  //           console.error('Error fetching user details:', error);
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.error('Error fetching reviews:', error);
  //     }
  //   );
  }
  

  






