import express from "express";
import { createContact } from "../controller/contact/create.js";
import { getAllContact } from "../controller/contact/getAll.js";
import { getContactById } from "../controller/contact/getById.js";
import { deleteContact } from "../controller/contact/delete.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";

const router = express.Router();

router.post(
  "/contacts",
  authenticate,
  authorize(["Admin", "Member"]),
  createContact
);
router.get("/contacts", getAllContact);
router.get("/contacts/:id", getContactById);
router.delete(
  "/contacts/:id",
  authenticate,
  authorize(["Admin", "Member"]),
  deleteContact
);
export default router;
