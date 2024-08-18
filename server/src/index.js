import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import projectRouter from './routes/projectRouter.js';
import podcastRouter from './routes/podcastRoutes.js';
import cors from 'cors';
import authToken from './middleware/authToken.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.error('Could not connect to MongoDB', err)
    })

//register routes to app
app.use('/login', authRouter);
app.use('/project', authToken, projectRouter);
app.use('/podcast', authToken, podcastRouter);


app.listen(PORT, 'localhost', () => {
    console.log("app is running on port 5000");
})