import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/auth', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({msg: "Auth route succeeded"})
})

export default router;