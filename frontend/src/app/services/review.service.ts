// review.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Review, ReviewDetails } from '../interfaces/review';
import { TourDetails } from '../interfaces/tour';


@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private baseUrl = 'http://localhost:4000';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  addReview(review: ReviewDetails): Observable<any> {
    return this.http.post(`${this.baseUrl}/review/addRevie`, review, { headers: this.headers });
  }

  getReviews(): Observable<any> {
    return this.http.get(`${this.baseUrl}/review/getAllReviews`, { headers: this.headers });
  }

  getReviewById(reviewID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/review/getOneReview/${reviewID}`, { headers: this.headers }).pipe(
      catchError((error) => {
        if (error.status === 404) {
          return throwError(()=>'Review not found');
        }
        return throwError(()=>'Error fetching review by ID');
      })
    );
  }

  deleteReview(reviewID: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/review/delete/${reviewID}`, { headers: this.headers });
  }

  editReview(reviewID: string, review: ReviewDetails): Observable<any> {
    return this.http.put(`${this.baseUrl}/review/updateReview/${reviewID}`, review, { headers: this.headers });
  }

 

}
