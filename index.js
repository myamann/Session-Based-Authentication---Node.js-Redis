import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import Redis from 'ioredis';
import connectRedis from 'connect-redis';

dotenv.config();

const app = express();

const RedisStore = connectRedis(session);

const redis = new Redis();

app.use(
  session({
    name: 'sessid',
    store: new RedisStore({
      client: redis,
      disableTouch: true,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 gün
      httpOnly: true,
      secure: !process.env.NODE_ENV === 'production', // for https secure true & false
    },
    // secret: "mysecretkey"
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username === 'admin' && password === '123')) {
      return res.status(400).json({ error: 'invalid creds' });
    }

    const user = { username, favorite: 'icecream' };
    req.session.user = user;

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

app.listen(5000, () => {
  console.log('listening on port 5000;');
});
