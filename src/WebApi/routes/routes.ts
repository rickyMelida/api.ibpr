import { Router } from 'express';
import verseRouter from './verse.router';

const router = Router();

router.use('/verses', verseRouter);

export default router;