import express from 'express'
import session from 'express-session';
import cors from 'cors'
import dotenv from 'dotenv'
import app from './routers/generated_routes';

dotenv.config()

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:9000', 'http://localhost:9300']
}))

if(process.env.SESSION_SECRET_KEY){
  app.use(session({ secret: process.env.SESSION_SECRET_KEY, resave: false, saveUninitialized: true }));

  // Add Passport configuration here.
  
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

