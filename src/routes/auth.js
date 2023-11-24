import express from "express";
import AuthController from "../controllers/auth";
import checkAuth from "../middlewares/auth";

export default authRouter = express.Router();

authRouter
  .get("/me", checkAuth, AuthController.me)
  .get("/login", AuthController.login)
  .get("/callback", AuthController.authCallback)
  .get("/refresh_token", AuthController.refreshToken);
