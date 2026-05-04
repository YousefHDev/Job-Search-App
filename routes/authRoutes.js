import express from 'express';
import { signUp, confirmOTP, signIn } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/confirm-otp', confirmOTP);
router.post('/signin', signIn);

export default router;