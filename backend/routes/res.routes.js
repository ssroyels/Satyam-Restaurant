import { Router } from "express";
import { GetFood, PostFood } from "../controllers/res.controller.js";


const router = Router();

router.post("/postFood",PostFood)
router.get("/getFood",GetFood)

export default router;