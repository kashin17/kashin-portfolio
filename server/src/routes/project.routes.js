import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { list, getBySlug, create, update, remove } from '../controllers/project.controller.js';

const router = Router();
router.get('/', list);
router.get('/slug/:slug', getBySlug);
router.post('/', auth, create);
router.put('/:id', auth, update);
router.delete('/:id', auth, remove);
export default router;
