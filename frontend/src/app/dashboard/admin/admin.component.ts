

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourService } from 'src/app/services/tours.service';
import { DateRange, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TourDetails } from 'src/app/interfaces/tour';
import { Date } from 'mssql';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  visible = false;
  tourForm: FormGroup;
  startDate!: Date;
  endDate!: Date; 
  tours: any[] = [];
  showTourTable = false;
  editingTourId: any;

  constructor(private fb: FormBuilder, private tourService: TourService) {
    this.tourForm = this.fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      destination: ['', Validators.required],
      price: ['', [Validators.required]],
      type: ['', [Validators.required]],
      duration: ['', [Validators.required]],
    });
  }

  createTour() {
    console.log('Form values:', this.tourForm.value);
  
    let details: TourDetails = this.tourForm.value;
  
    this.tourService.createTour(details).subscribe(
      (response) => {
        console.log('Tour created successfully:', response);
        this.tourForm.reset();
        this.visible = false;
      },
      (error) => {
        console.error('Error creating tour:', error);
      }
    );
  }
  

  ngOnInit(): void {
    this.loadTours();
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



  getTours(): void {
    this.tourService.getTours().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getTourById(tourId: string): void {
    this.tourService.getTourById(tourId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteTour(tourId: string): void {
    this.tourService.deleteTour(tourId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }


  toggleTourTable() {
    this.showTourTable = !this.showTourTable;
  }

  editTour(tour: any) {
    this.editingTourId = tour.id; 
    this.tourForm.patchValue(tour); 
    this.visible = true; 
  }

  // checkIfTourExistsByName(name: string): void {
  //   this.tourService.checkIfTourExistsByName(name).subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }
}















// import { Component } from '@angular/core';
// import { TourService } from 'src/app/services/tours.service'; 

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent {
//   visible = false;
//   tourData: any = {
//     name: '',
//     description: '',
//     destination: '',
//     price: '',
//     type: '',
//     startDate: '',
//     endDate: '',
//     duration: ''
//   };

//   constructor(private tourService: TourService) {}

//   createTour(): void {
//     this.tourService.createTour(this.tourData).subscribe(
//       (response) => {
//         console.log(response);
//       },
//       (error) => {
//         console.error(error); 
//       }
//     );
//   }

//   getTours(): void {
//     this.tourService.getTours().subscribe(
//       (response) => {
//         console.log(response); 
//       },
//       (error) => {
//         console.error(error); 
//       }
//     );
//   }

//   getTourById(tourId: string): void {
//     this.tourService.getTourById(tourId).subscribe(
//       (response) => {
//         console.log(response); 
//       },
//       (error) => {
//         console.error(error); 
//       }
//     );
//   }

//   deleteTour(tourId: string): void {
//     this.tourService.deleteTour(tourId).subscribe(
//       (response) => {
//         console.log(response); 
//       },
//       (error) => {
//         console.error(error); 
//       }
//     );
//   }

//   // checkIfTourExistsByName(name: string): void {
//   //   this.tourService.checkIfTourExistsByName(name).subscribe(
//   //     (response) => {
//   //       console.log(response); 
//   //     },
//   //     (error) => {
//   //       console.error(error); 
//   //     }
//   //   );
//   // }
// }
