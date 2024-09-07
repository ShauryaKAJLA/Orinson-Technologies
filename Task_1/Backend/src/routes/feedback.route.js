import { Router } from "express";
import { addFeedback } from "../controllers/feedback.controller.js";

const router=Router();

router.route("/addFeedback").post(addFeedback);

export default router