import { Router } from "express";
import { setBusiness,getBusiness } from "../controllers/Business.controller.js";


const router = Router();

router.get("/getBusiness",getBusiness);
router.post("/setBusiness",setBusiness);

export default router;