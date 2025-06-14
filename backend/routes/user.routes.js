import { Router } from "express";
import { loginController, registerController, verifyOTP } from "../controllers/user.controller.js";

const router = Router();

router.post("/login",loginController);
router.post("/register",registerController);
router.post("/verifyOtp",verifyOTP);

export default router