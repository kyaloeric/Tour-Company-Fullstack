
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {Tour, TourDetails } from '../interfaces/tour';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private baseUrl = 'http://localhost:4000';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  createTour(tour: TourDetails): Observable<any> {
    return this.http.post(`${this.baseUrl}/tours/add`, tour, { headers: this.headers });
  }

  getTours(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tours`, { headers: this.headers });
  }

  getTourById(tourId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/tours/getTour/${tourId}`, { headers: this.headers }).pipe(
      catchError((error) => {
        if (error.status === 404) {
          return throwError(()=>'Tour not found');
        }
        return throwError(()=>'Error fetching tour by ID');
      })
    );
  }

  deleteTour(tourId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tours/delete/${tourId}`, { headers: this.headers });
  }

  editTour(tourId: string, tour: TourDetails): Observable<any> {
    return this.http.put(`${this.baseUrl}/tours/editTour/${tourId}`, tour, { headers: this.headers });
  }

  private checkTourExistsByName(tourName: string): Observable<boolean> {
    // Logic to check if the tour exists by name
    // Replace with your actual API endpoint to check by name
    return this.http.get<boolean>(`${this.baseUrl}/tours/checkExists/${tourName}`, { headers: this.headers });
  }

  // Add more methods for updating, fetching specific tours, etc.
}
