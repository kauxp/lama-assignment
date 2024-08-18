import { get } from "mongoose";
import { createPodcast, getPodcast, deletePodcast, updatePodcast, getPodcastById, getByProjectId } from "../controllers/podcastController.js";
import express from 'express';
const router = express.Router();

router.post('', createPodcast);

router.get('', getPodcast);

router.delete('/:id', deletePodcast);

router.post('/edit/:id', updatePodcast);

router.get('podcast/:id', getPodcastById);

router.get('/:id', getByProjectId);

export default router;