import Router from "express";
import {
  newreview,
  getAllReviews,
  getReview,
  deleteReview,
  updateReviewDetails,
} from "../controllers/reviewsControllers";

const review_router = Router();

review_router.post("/addreview", newreview);
review_router.get("/getallreviews", getAllReviews);
review_router.get("/getonereview", getReview);
review_router.put("/updatereview", updateReviewDetails);
review_router.delete("/deletereview/:reviewID", deleteReview);

export default review_router;