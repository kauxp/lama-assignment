import mongoose from 'mongoose';
import podcastSchema from './PodcastSchema.js';

const projectSchema = new mongoose.Schema({
    
    projectName: {
        type: String,
        required: true
    }
});



export default mongoose.model('Project', projectSchema);