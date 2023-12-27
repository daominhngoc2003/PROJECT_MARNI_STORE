import express from "express";
import {
  createBanner,
  getAllBanner,
  getBannerById,
  removeBanner,
  updateBanner,
} from "../controller/banner/index.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";

const Router = express.Router();

Router.get("/banners", getAllBanner);
Router.delete(
  "/banners/:id",
  authenticate,
  authorize(["Admin", "Member"]),
  removeBanner
);
Router.put(
  "/banners/:id",
  authenticate,
  authorize(["Admin", "Member"]),
  updateBanner
);
Router.post(
  "/banners",
  authenticate,
  authorize(["Admin", "Member"]),
  createBanner
);
Router.get("/banners/:id", getBannerById);
export default Router;
