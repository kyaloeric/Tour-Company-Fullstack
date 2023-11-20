// review.component.ts
import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { Review } from '../interfaces/review';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReviews().subscribe(
      (review) => {
        this.reviews = review;
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }

  addReview(): void {
    const newReview: Review = {
      reviewComment: 'Your review comment',
      userID: 'your-user-id',
      tourID: 'your-tour-id',
    };

    this.reviewService.addReview(newReview).subscribe(
      () => {
        console.log('Review added successfully');
      },
      (error) => {
        console.error('Error adding review:', error);
      }
    );
  }

  // editReview(review: Review): void {
  //   this.reviewService.editReview(review).subscribe(
  //     () => {
  //       console.log('Review updated successfully');
  //     },
  //     (error) => {
  //       console.error('Error updating review:', error);
  //     }
  //   );
  // }

  deleteReview(reviewID: string): void {
    this.reviewService.deleteReview(reviewID).subscribe(
      () => {
        console.log('Review deleted successfully');
      },
      (error) => {
        console.error('Error deleting review:', error);
      }
    );
  }
}
