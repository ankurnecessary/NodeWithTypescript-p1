import { Router } from 'express';
import * as feedsController from '../controllers/feeds';

const router = Router();

// GET /feed/posts
router.get('/posts', feedsController.getPosts);

// POST /feed/post
router.post('/post', feedsController.createPost);

export default router;
