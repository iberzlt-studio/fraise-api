import passport from 'passport';
import  { Strategy as LocalStrategy } from 'passport-local';

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
export default passport