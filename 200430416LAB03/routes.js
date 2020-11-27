import { Router } from 'express';
const router = Router();
import peopleRouter from './routes/people';

router.use('/people', peopleRouter);
router.use('*', (req, res) => res.sendStatus(404));

export default router;