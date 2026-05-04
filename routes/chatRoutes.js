import express from 'express';
import { getChatHistory } from '../controllers/chatController.js';
import { authenticate } from '../middleware/auth.js';
import { isHRorOwner } from '../middleware/auth.js';

const router = express.Router();

router.get('/history/:userId1/:userId2', authenticate, getChatHistory);
router.post('/initiate', authenticate, isHRorOwner);

export default router;