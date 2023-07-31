
import express from 'express';
//import passport from 'src/service/user/auth/index';
import passport from 'passport';
const router = express.Router()

// "/user/{resouce}" route

router.get('/', (req, res) => {
  res.json('/user')
})

router.post('/login', 
passport.authorize('local'), function(req, res) {
  res.json({userId:req.user})
});
export default router;
