import { Router } from "express";
import { PostSupport } from "../controllers/support.controller.js";

const router = Router();

router.post("/supportmsg",PostSupport)

export default router;