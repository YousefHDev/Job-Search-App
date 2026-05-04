import express from 'express';
import { addCompany, updateCompany, softDeleteCompany } from '../controllers/companyController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticate, authorize(['admin']), addCompany);
router.put('/:companyId', authenticate, authorize(['company', 'admin']), updateCompany);
router.delete('/:companyId', authenticate, authorize(['company', 'admin']), softDeleteCompany);

export default router;