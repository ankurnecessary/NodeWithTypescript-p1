import express from 'express';
import feedsRoutes from './routes/feeds';

const app = express();

app.get('/', (req, res, next) => {
  res.json({ text: 'You are in nodeWithTypescript-p1' });
});

// Added feeds routes
app.use(feedsRoutes);

app.listen(5001, () => {
  console.log('Server listening to port 5001');
});
