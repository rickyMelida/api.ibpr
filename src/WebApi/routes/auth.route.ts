import { Router } from "express";
import { signIn } from "../controller/auth.controller";
const router = Router();

router.get('/auth/signin', signIn);

export default router;