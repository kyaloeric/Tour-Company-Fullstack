// booking.component.ts
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../interfaces/booking';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getBookings().subscribe(
      (bookings) => {
        this.bookings = bookings;
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }

  addBooking(): void {
    const newBooking: Booking = {
      tourID: 'your-tour-id',
      totalprice: 6700,
      totalBookCount: 14,
      userID: 'your-user-id',
    };

    this.bookingService.addBooking(newBooking).subscribe(
      () => {
        console.log('Booking added successfully');
      },
      (error) => {
        console.error('Error adding booking:', error);
      }
    );
  }

  updateBooking(booking: Booking): void {
    this.bookingService.updateBooking(booking).subscribe(
      () => {
        console.log('Booking updated successfully');
      },
      (error) => {
        console.error('Error updating booking:', error);
      }
    );
  }

  deleteBooking(bookID: string): void {
    this.bookingService.deleteBooking(bookID).subscribe(
      () => {
        console.log('Booking deleted successfully');
      },
      (error) => {
        console.error('Error deleting booking:', error);
      }
    );
  }
}
