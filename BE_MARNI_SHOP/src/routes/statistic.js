import express from "express";
import { CountBillToday } from "../controller/statistics/index.js";
import { getMonthlyRevenue } from "../controller/statistics/monthlyRevenue.js";
import { getYearlyRevenue } from "../controller/statistics/yearlyRevenue.js";
import { getWeeklyRevenue } from "../controller/statistics/weeklyRevenue.js";
import { TopSelling } from "../controller/statistics/topSeling.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";

const Router = express.Router();

Router.get(
  "/statistics/count-bill-today",
  authenticate,
  authorize(["Admin", "Member"]),
  CountBillToday
);
Router.get(
  "/revenue/:year",
  authenticate,
  authorize(["Admin", "Member"]),
  getMonthlyRevenue
);
Router.get(
  "/yearly-revenue",
  authenticate,
  authorize(["Admin", "Member"]),
  getYearlyRevenue
);
Router.get(
  "/revenue/:year/:month/weekly",
  authenticate,
  authorize(["Admin", "Member"]),
  getWeeklyRevenue
);
Router.get(
  "/products-sell",
  authenticate,
  authorize(["Admin", "Member"]),
  TopSelling
);

export default Router;
