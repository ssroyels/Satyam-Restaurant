import { Router } from "express";
import { getTeam, setTeam } from "../controllers/team.controller.js";


const router = Router();

router.get("/getTeam",getTeam);
router.post("/setTeam",setTeam);

export default router;