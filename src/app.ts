import express, { type NextFunction, type Request, type Response } from 'express';
import bodyParser from 'body-parser';

import feedsRoutes from './routes/feeds';

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // To parse the json data in the request

// To  handle CORS error in the browser
app.use((req: Request, res: Response, next: NextFunction): void => {
  // We can set these headers conditionally, if we want our APIs to be accessed from multiple domains.
  // But right now we are entertaining requests from any domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res, next) => {
  res.json({ text: 'You are in nodeWithTypescript-p1' });
});

// Added feeds routes
app.use('/feed', feedsRoutes);

app.listen(5001, () => {
  console.log('Server listening to port 5001');
});
