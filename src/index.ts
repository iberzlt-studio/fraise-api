import express from 'express'
import session from 'express-session';
import cors from 'cors'
import dotenv from 'dotenv'
import app from './routers/generated_routes';
import passport from 'src/service/user/auth/index';

dotenv.config()

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:9000', 'http://localhost:9300']
}))
app.use(passport.initialize());
app.use(passport.session());


if(process.env.SESSION_SECRET_KEY){
  app.use(session({ secret: process.env.SESSION_SECRET_KEY, resave: false, saveUninitialized: true }));

  app.get('/', (req, res) => {
    res.json({result: 'OK'})
  })
  
  //server start
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
} else {
  console.log('can not get .env')
}

