import Router from "express";
import {getAllBookings, getBooking, updateBookingDetails, deleteBooking, createBooking } from "../controllers/bookingControllers";

const booking_router = Router();

booking_router.post("/addBooking", createBooking);
booking_router.get("/getallBookings", getAllBookings);
booking_router.get("/getOneBooking/:bookID", getBooking);
booking_router.put("/updateBooking", updateBookingDetails);
booking_router.delete("/deleteBooking/:bookID", deleteBooking);

export default booking_router;