export interface Tour {
    name:string,
    description:string,
    destination:string,
    price: number;
    type:string,
    startDate:string,
    endDate:string,
    duration:string
}


export interface TourDetails {
    name:string,
    description:string,
    destination:string,
    price: number;
    type:string,
    startDate:string,
    endDate:string,
    duration:string
}


export interface TourBooking extends Tour {
    bookingID:string,
    userID: string;
    tourID: string;
    selectedID:string;
    bookingDate: string,
  }