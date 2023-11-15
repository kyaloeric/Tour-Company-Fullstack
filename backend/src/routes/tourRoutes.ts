import { Router } from "express";
import { deleteTour,addTour, getTourById, editTour, getAllTours, getMyTours } from "../controllers/toursControllers";

const tour_router = Router();


tour_router.post('/add', addTour);

tour_router.put("/editTour/:tourID", editTour);
tour_router.delete("/delete/:tourID", deleteTour);
tour_router.delete("/getTour/:tourID", getTourById);


tour_router.get("/allTours", getAllTours);
tour_router.get("/my_projects/:id", getMyTours);



export default tour_router;
