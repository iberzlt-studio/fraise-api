import express from 'express';
import passport from 'passport';
import  { Strategy as LocalStrategy } from 'passport-local';
import app from 'src/routers/app'

const router = express.Router()

type UserType = { [key: string]: string };
const users: UserType = { 'user1': 'password1', 'user2': 'password2' };

passport.use(new LocalStrategy(
    function(username, password, done) {
      if (users[username] && users[username] === password) {
        return done(null, username);
      } else {
        return done(null, false, { message: 'Invalid credentials.' });
      }
    }
  ));
  
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(id:string, done) {
    done(null, id);
  });

app.use(passport.initialize());
app.use(passport.session());

// "/user/{resouce}" route

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);
export default router;
