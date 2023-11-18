import Router from "express";
import {getAllBookings, getBooking, updateBookingDetails, deleteBooking, createBooking } from "../controllers/bookingControllers";

const booking_router = Router();

booking_router.post("/addbooking", createBooking);
booking_router.get("/getallbookings", getAllBookings);
booking_router.get("/getonebooking", getBooking);
booking_router.put("/updatebooking", updateBookingDetails);
booking_router.delete("/deletebooking/:bookID", deleteBooking);

export default booking_router;