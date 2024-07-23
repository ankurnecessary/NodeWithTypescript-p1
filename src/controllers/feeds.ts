import { type NextFunction, type Request, type Response } from 'express';

export const getPosts = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Http status code 200 is used to tell the client that the GET request is sucessful
  res.status(200).json({
    posts: [
      {
        title: 'This is the first post',
        content: 'This is the content of first post'
      }
    ]
  });
};

export const createPost = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Here in `req` `body` property was added by `body-parser` middleware
  const title = req.body.title;
  const content = req.body.content;

  // Create a post in database here, if needed.

  // 201 - Sucessfully created
  res.status(201).json({
    message: 'Post created sucessfully.',
    post: {
      id: Number(new Date()),
      title,
      content
    }
  });
};
