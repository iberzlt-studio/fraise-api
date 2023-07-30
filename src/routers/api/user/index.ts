
import express from 'express';
import passport from 'src/service/user/auth/index';

import app from 'src/routers/app'

const router = express.Router()

// "/user/{resouce}" route

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);
export default router;
