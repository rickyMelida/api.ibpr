import { Router } from "express";
import { container } from "tsyringe";
import VerseController from "../controller/VerseController";
import DependencyInyeccion from "../../persistence/DependencyInyeccion";
DependencyInyeccion();

const router = Router();
const userController = container.resolve(VerseController);

router.get("/getVerses", userController.getHeaderVerses);
router.post('/setVerse', userController.setHeaderVerse);

export default router;