import { Router } from 'express';
import * as feedsController from '../controllers/feeds';

const router = Router();

// GET /feed/posts
router.get('/posts', feedsController.getPosts);

export default router;
