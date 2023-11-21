import { TestBed } from '@angular/core/testing';

import { BookTourService } from './book-tour.service';

describe('BookTourService', () => {
  let service: BookTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
