import express from 'express';
import { applyForJob, getApplicationsForJob } from '../controllers/applicationController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticate, applyForJob);
router.get('/:jobId', authenticate, getApplicationsForJob);

export default router;