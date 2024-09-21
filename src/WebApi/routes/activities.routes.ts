import { Router } from "express";
import { container } from "tsyringe";
import ActivityController from "../controller/ActivityController";

const router = Router();
const activityController = container.resolve(ActivityController);

router.get("/getActivities", activityController.GetActivities);

export default router;
