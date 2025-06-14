import { Router } from "express";
import { getItem, postItem } from "../controllers/item.controllers.js";

const router = Router();

router.get("/getItems",getItem);
router.post("/setItems",postItem);

export default router;

