import { Router } from "express";
import { container } from "tsyringe";
import VerseController from "../controller/VerseController";

const router = Router();
const verseController = container.resolve(VerseController);

router.get("/getVerses", verseController.getHeaderVerses);
router.post('/setVerse', verseController.setHeaderVerse);

export default router;