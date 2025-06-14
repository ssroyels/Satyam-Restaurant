import { Router } from "express";
import { locationController } from "../controllers/location.controllers.js";

const router = Router();

router.post("/location",locationController);

export default router;