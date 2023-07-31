import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv'
import {setAuthorize} from 'src/service/user/auth/index';
import cors from 'cors'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:9000', 'http://localhost:9300']
}))

if(process.env.SESSION_SECRET_KEY){
    app.use(session({ secret: process.env.SESSION_SECRET_KEY, resave: false, saveUninitialized: true }));
    setAuthorize(app)
}else{
    console.log('can not get .env')
}

export default app;