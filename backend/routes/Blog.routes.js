import { Router } from "express";
import { SetBlog ,GetBlog} from "../controllers/Blog.controller.js";


const router = Router();

router.get("/getBlog",GetBlog);
router.post("/setBlog",SetBlog);

export default router;