import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { list, create, update, remove } from '../controllers/skill.controller.js';

const router = Router();
router.get('/', list);
router.post('/', auth, create);
router.put('/:id', auth, update);
router.delete('/:id', auth, remove);
export default router;
