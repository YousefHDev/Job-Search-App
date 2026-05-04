import express from 'express';
import { addJob, updateJob, deleteJob } from '../controllers/jobController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticate, authorize(['company']), addJob);
router.put('/:jobId', authenticate, authorize(['company']), updateJob);
router.delete('/:jobId', authenticate, authorize(['company']), deleteJob);

export default router;