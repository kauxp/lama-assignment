import PodcastSchema from "../models/PodcastSchema.js";

export const createPodcast = async (req, res) => {
    const { podcastName, podcastScript, podcastUrl, projectId, status } = req.body;
    try {
        const podcast = await PodcastSchema.create({
            projectId: projectId,
            podcastName: podcastName,
            podcastScript: podcastScript,
            podcastUrl: podcastUrl,
            projectId: projectId,
            uploadDateAndTime: new Date(),
            status: status
        });
        res.status(201).json({ podcast });
    }

    catch (error) {
        res.status(500).json({ message: 'Server error', error: error });
    }
}

export const getPodcast = async (req, res) => {
    try {
        const podcasts = await PodcastSchema.find();
        res.status(200).json({ podcasts });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

export const deletePodcast = async (req, res) => {

    try {
        const podcast = await PodcastSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Podcast deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Could not delete Podcast: ', podcast });
    }
}

export const updatePodcast = async (req, res) => {
    const { id } = req.params;
    const { podcastScript } = req.body;
    try {
        const podcast = await PodcastSchema.findByIdAndUpdate(
            id,
            {
                podcastScript: podcastScript,
                uploadDateAndTime: new Date(),
            },
            { new: true, runValidators: true }
        );

        if (!podcast) {
            return res.status(404).json({ message: 'Podcast not found' });
        }

        res.status(200).json({ podcast });
    } catch (error) {
        res.status(500).json({ message: 'Could not update Podcast', error: error });
    }
}

export const getPodcastById = async (req, res) => {
    const { id } = req.params;
    try {
        const podcast = await PodcastSchema.findById(id);
        res.status(200).json({ podcast });
    } catch (error) {
        res.status(500).json({ message: 'Could not get podcast', error: error });
    }
}

export const getByProjectId = async (req, res) => {
    const { projectId } = req.params;

    try {
        const podcasts = await PodcastSchema.find({ projectId: projectId });
        res.status(200).json({ podcasts });
    } catch (error) {
        res.status(500).json({ message: 'Could not get podcast', error: error });
    }
}