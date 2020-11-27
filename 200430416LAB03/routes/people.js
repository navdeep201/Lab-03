import { getPeople, getPeopleById } from '../controllers/people';
import { Router } from 'express';
const router = Router();


router.get('/', getPeople);
router.get('/:id', getPeopleById);

export default router;

