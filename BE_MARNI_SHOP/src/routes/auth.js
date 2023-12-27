import express from "express";
import {
  register,
  signin,
  forgetPassword,
  verifyToken,
  requestRefreshToken,
  test_token_get_user,
  changePasswordNew,
  changePasswordForget,
} from "../controller/auth/index.js";
import { resetToken } from "../controller/auth/resetToken.js";
import { verifyUser } from "../controller/auth/verifyToken.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorization.js";
import { logout } from "../controller/auth/logout.js";

const Router = express.Router();

Router.post("/auth/signin", signin);
Router.post("/auth/signup", register);
Router.post("/auth/verify", verifyUser);
Router.post("/auth/logout", logout);

Router.post(
  "/auth/change-password-new",
  authenticate,
  authorize(["Admin", "Member"]),
  changePasswordNew
);
Router.post(
  "/auth/change-password-forget",
  authenticate,
  authorize(["Admin", "Member"]),
  changePasswordForget
);
Router.post(
  "/auth/forget-password",
  authenticate,
  authorize(["Admin", "Member"]),
  forgetPassword
);
Router.post(
  "/auth/verify-email",
  authenticate,
  authorize(["Admin", "Member"]),
  verifyToken
);
Router.post(
  "/auth/reset-token",
  authenticate,
  authorize(["Admin", "Member"]),
  resetToken
);

Router.post(
  "/auth/resfeshtoken",
  authenticate,
  authorize(["Admin", "Member"]),
  requestRefreshToken
);

Router.get(
  "/auth/users/:id",
  authenticate,
  authorize(["Admin", "Member"]),
  test_token_get_user
);
export default Router;
