import express from 'express';
import { updateUser, uploadProfilePic, softDeleteAccount } from '../controllers/userController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.put('/:userId', authenticate, updateUser);
router.post('/:userId/upload-profile-pic', authenticate, uploadProfilePic);
router.delete('/:userId', authenticate, softDeleteAccount);

export default router;