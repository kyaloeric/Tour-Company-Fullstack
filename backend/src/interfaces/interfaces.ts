export interface User{
    userID:string,
    fullName:string,
    email:string,
    password:string,
    role:string
}

export interface Tour{
    tourID:string,
    name:string,
    description:string,
    destination:string,
    price: number;
    type:string,
    startDate:string,
    endDate:string,
    duration:string
}

export interface TourBookingInput {
    userId: string;
    tourId: string;
  }
  
 export interface TourReviewInput {
    userId: string;
    tourId: string;
    rating: number;
    comment: string;
  }
  