import express from "express";
import {
  createBill,
  getAllBill,
  getBillByUser,
  getBillById,
  deleteBillById,
  updateBill,
  getBillStatus,
  getBillByUserReviews,
} from "../controller/bill/index.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";
import { getBillStatusByUser } from "../controller/bill/getBillbyStatus.js";

const Router = express.Router();

Router.post("/checkout", authenticate, createBill);
Router.put("/bills/update/:bill_id", authenticate, updateBill);

Router.get("/bills", authenticate, getAllBill);
Router.get("/bills/dStatus/:statusId", authenticate, getBillStatus);
Router.get("/bills/user/:userId", authenticate, getBillByUser);
Router.get(
  "/bills/user/:user_id/status/:payment_status_id",
  authenticate,
  getBillStatusByUser
);
Router.get("/bills/:billId", authenticate, getBillById);
Router.get("/bills/user/:userId/reviews", authenticate, getBillByUserReviews);
Router.delete("/bills/delete/:id", authenticate, deleteBillById);

export default Router;
