import passport from 'passport';
import { Application } from 'express';
import  { Strategy as LocalStrategy } from 'passport-local';
import { getUser } from 'src/service/db/user/index'
import crypto from 'crypto'

export function setAuthorize(app :Application) {

    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.use(new LocalStrategy(
        (username, password, done) => {
            console.log('[info] Authorization start')
            const user = getUser(username);
            user.then((data)=>{
                const sha256 = crypto.createHash('sha256')
                const hashPassword = sha256.update(password).digest('hex')
                if (data?.password == hashPassword) {
                    console.log('[info] authorized complete')
                    return done(null, username);
                }else{
                    console.log('[info] authorized error')
                    return done(null, false, { message: 'Invalid credentials.' });
                }
            })
        }
    ));
    
    passport.serializeUser(function(userId, done) {
        console.log('[info] serialize start userId:' + userId);
        done(null, userId);
    });
    
    passport.deserializeUser(function(id:string, done) {
        console.log('[info] deserialize start userId:' + id);
        done(null, id);
    });
}