// booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/booking/getallBookings`);
  }

  addBooking(booking: Booking): Observable<any> {
    return this.http.post(`${this.baseUrl}/booking/addBooking`, booking);
  }

  updateBooking(booking: Booking): Observable<any> {
    return this.http.put(`${this.baseUrl}/booking/updateBooking`, booking);
  }

  deleteBooking(bookID: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/booking/deleteBooking/${bookID}`);
  }
}
