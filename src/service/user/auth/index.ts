import passport from 'passport';
import  { Strategy as LocalStrategy } from 'passport-local';
import { getUser } from 'src/service/db/user/index'
import crypto from 'crypto'

type UserType = { [key: string]: string };
const users: UserType = { 'user1': 'password1', 'user2': 'password2' };


passport.use(new LocalStrategy(
    async (username, password, done) => {
        const user = getUser(username);
        user.then((data)=>{
            const sha256 = crypto.createHash('sha256')
            const hashPassword = sha256.update(password).digest('hex')
            console.log('password:' + data?.password + ' db pass:' + hashPassword)
            if (data?.password == hashPassword) {
                return done(null, username);
            }
        })
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