
import express from 'express';
//import passport from 'src/service/user/auth/index';
import passport from 'passport';
const router = express.Router()

// "/user/{resouce}" route

router.get('/', (req, res) => {
  res.json('/user')
})

// router.post('/login', 
// passport.authenticate('local'), function(req, res) {
//   res.json({userId:req.user})
// });

router.post('/login', function(req, res) {
  passport.authenticate('local', (err: Error | null, user: string, info: any)=>{
    if(err) {
      console.log('[error] login error' + err)
      return res.json({status: 'error'})
    }
    
    req.logIn(user, (err)=>{
      if (err) {
        console.log('[error] login error' + err)
        return res.json({status: 'error'})
      }
      return res.json({status: 'success', info: user});
    })
  })(req, res)
});
export default router;
