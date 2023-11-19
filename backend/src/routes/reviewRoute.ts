import Router from "express";
import {
  addReview,
  getAllReviews,
  getReview,
  deleteReview,
  updateReviewDetails,
} from "../controllers/reviewsControllers";

const review_router = Router();

review_router.post("/addReview", addReview);
review_router.get("/getAllReviews", getAllReviews);
review_router.get("/getOneReview", getReview);
review_router.put("/updateReview", updateReviewDetails);
review_router.delete("/deleteReview/:reviewID", deleteReview);

export default review_router;