import express from "express";
import {
  addProductGroup,
  deleteGroup,
  getAllProductGroup,
  getProductGroup,
  updateProductGroup,
} from "../controller/product_group/index.js";
import { getGroupById } from "../controller/product_group/getOne.js";
import { deleteProductFromGroup } from "../controller/product_group/deleteProductByGroup.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";
const Router = express.Router();

Router.get("/product-groups/all", getAllProductGroup);
Router.get("/product-groups", getProductGroup);
Router.get("/product-groups/:id", getGroupById);
Router.delete(
  "/product-groups/delete/:id",
  authenticate,
  authorize(["Admin", "Member"]),
  deleteGroup
);
Router.post(
  "/product-groups",
  authenticate,
  authorize(["Admin", "Member"]),
  addProductGroup
);
Router.put(
  "/product-groups/:id",
  authenticate,
  authorize(["Admin", "Member"]),
  updateProductGroup
);
Router.post(
  "/product-groups/delete-product",
  authenticate,
  authorize(["Admin", "Member"]),
  deleteProductFromGroup
);

export default Router;
