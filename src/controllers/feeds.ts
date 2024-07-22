import { type NextFunction, type Request, type Response } from 'express';

export const getPosts = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.json({
    posts: [
      { title: 'this is the first post', content: 'this is the first post' }
    ]
  });
};
