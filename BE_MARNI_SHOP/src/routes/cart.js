import express from "express";
import {
  addToCart,
  deleleAllProductCart,
  deleteProductCart,
  getCartByUser,
  updateCart,
  applyCoupon,
} from "../controller/cart/index.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";

const Router = express.Router();
Router.get(
  "/carts/user/:user_id",
  authenticate,
  authorize(["Admin", "Member"]),
  getCartByUser
);
Router.post("/carts", authenticate, authorize(["Admin", "Member"]), addToCart);
Router.put(
  "/carts/update",
  authenticate,
  authorize(["Admin", "Member"]),
  updateCart
);

Router.delete(
  "/carts/deleteall/:userId",
  authenticate,
  authorize(["Admin", "Member"]),
  deleleAllProductCart
);
Router.post(
  "/carts/delete",
  authenticate,
  authorize(["Admin", "Member"]),
  deleteProductCart
);

Router.patch(
  "/carts/:id/apply",
  authenticate,
  authorize(["Admin", "Member"]),
  applyCoupon
);

export default Router;
