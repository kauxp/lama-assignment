import mongoose from "mongoose";
const podcastSchema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true
    },
    podcastName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    uploadDateAndTime: {
        type: Date,
        required: true
    },
    podcastUrl: {
        type: String,
        required: true
    },
    podcastScript: {
        type: String,
        required: true
    }
});
export default mongoose.model('Podcast', podcastSchema);





