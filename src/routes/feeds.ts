import { Router } from 'express';
import * as feedsController from '../controllers/feeds';

const router = Router();

// GET http://localhost:5001/posts
router.get('/posts', feedsController.getPosts);

export default router;
