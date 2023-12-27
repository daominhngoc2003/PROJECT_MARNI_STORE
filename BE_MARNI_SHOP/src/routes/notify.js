import express from "express";
import {
  getAllAdminNotify,
  getNotifiesByUser,
  getNotifyByUser,
} from "../controller/notifition/list.js";
import { authenticate } from "../middleware/authenticate.js";

const Router = express.Router();

Router.get("/notifies", authenticate, getAllAdminNotify);
Router.get("/notify/user/:userId", authenticate, getNotifyByUser);
Router.get("/notifies/user/:userId", authenticate, getNotifiesByUser);

export default Router;
