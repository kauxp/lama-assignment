import { createProject, getProject } from "../controllers/projectController.js";
import express from 'express';
const router = express.Router();

router.post('', createProject);

router.get('', getProject);

export default router;