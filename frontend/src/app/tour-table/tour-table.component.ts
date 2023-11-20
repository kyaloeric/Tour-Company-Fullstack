import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TourService } from '../services/tours.service';
import { Tour } from '../interfaces/tour';

@Component({
  selector: 'app-tour-table',
  templateUrl: './tour-table.component.html',
  styleUrls: ['./tour-table.component.css']
})
export class TourTableComponent {
  @Input() tours: any[] = [];
  @Output() editTour = new EventEmitter<any>();
  @Output() deleteTour = new EventEmitter<any>();

  editClicked(tour: any) {
    this.editTour.emit(tour);
  }

  deleteClicked(tourID: string) {
    this.deleteTour.emit(tourID);
  }
}
