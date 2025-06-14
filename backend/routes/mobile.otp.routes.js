import { Router } from "express";

import { sentOtpMobile} from "../controllers/mobileOtp.controller.js";



const router = Router();

router.post("/sendNumber",sentOtpMobile);
// router.post("/verifyOtp",verifyOtpMobile);

export default router;