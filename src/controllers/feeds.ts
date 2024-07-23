import { type NextFunction, type Request, type Response } from 'express';

export const getPosts = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Http status code 200 is used to tell the client that the GET request is sucessful
  res.status(200).json({
    posts: [
      { title: 'this is the first post', content: 'this is the first post' }
    ]
  });
};
