import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.json({ text: 'You are in nodeWithTypescript-p1' });
});

app.listen(5001, () => {
  console.log('Server listening to port 5001');
});
