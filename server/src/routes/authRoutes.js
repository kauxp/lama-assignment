import { login } from '../controllers/authController.js';
import express from 'express';
const router = express.Router();

router.post('', login);

export default router;