import express from "express";
import AuthController from "../controllers/auth.js";
import checkAuth from "../middlewares/auth.js";

const authRouter = express.Router();

authRouter
  .get("/me", checkAuth, AuthController.me)
  .get("/login", AuthController.login)
  .get("/callback", AuthController.authCallback)
  .get("/refresh_token", AuthController.refreshToken);

  export default authRouter