import express from 'express';
import session from 'express-session';

const app = express();

app.listen(5000, () => {
  console.log('listening on port 5000;');
});
