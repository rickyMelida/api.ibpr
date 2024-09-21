import DependencyInyeccion from "../../persistence/DependencyInyeccion";
DependencyInyeccion();

import { Router } from "express";
import verseRoutes from "./verse.router";
import coverImageRoutes from "./coverImage.router";

const router = Router();

router.use("/verses", verseRoutes);
router.use("/cover-images", coverImageRoutes);

export default router;
