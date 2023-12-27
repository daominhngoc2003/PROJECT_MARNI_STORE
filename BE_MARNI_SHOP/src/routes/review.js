import express from "express";
import {
  createReview,
  deleteReviewById,
  getAllReviews,
  getReviewProductID,
} from "../controller/reviews/review.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";

const Router = express.Router();

Router.post(
  "/reviews",
  authenticate,
  authorize(["Admin", "Member"]),
  createReview
);
Router.get("/reviews", getAllReviews);
Router.get("/reviews/productId/:id", getReviewProductID);
Router.delete(
  "/reviews/:reviewId",
  authenticate,
  authorize(["Admin", "Member", "Customer"]),
  deleteReviewById
);
export default Router;
