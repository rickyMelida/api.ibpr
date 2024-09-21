import { Router } from "express";
import { container } from "tsyringe";
import CoverImageController from "../controller/CoverImageController";

const router = Router();
const coverImageController = container.resolve(CoverImageController);

router.get("/getCoverImages", coverImageController.GetCoverImages);
router.get("/getCoverImage/:id", coverImageController.GetCoverImageById);
router.post("/setCoverImage", coverImageController.setCoverImage);

export default router;
