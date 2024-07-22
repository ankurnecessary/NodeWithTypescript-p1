import { type NextFunction, type Request, type Response } from 'express';

export const getPosts = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.json(['You will get the posts soon']);
};
