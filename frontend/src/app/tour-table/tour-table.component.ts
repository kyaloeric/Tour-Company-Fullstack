
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tour-table',
  templateUrl: './tour-table.component.html',
  styleUrls: ['./tour-table.component.css']
})
export class TourTableComponent {
  @Input() tours: any[] = [];
  @Output() editTour = new EventEmitter<any>();
  @Output() deleteTour = new EventEmitter<any>();

}
