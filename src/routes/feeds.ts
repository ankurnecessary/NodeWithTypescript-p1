import { Router } from 'express';

const router = Router();

// GET http://localhost:5001/posts
router.get('/posts', (req, res, next) => {
  res.json(['You will get the posts soon']);
});

export default router;
