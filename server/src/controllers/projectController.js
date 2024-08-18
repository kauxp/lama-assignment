import ProjectSchema from "../models/ProjectSchema.js"

export const createProject = async (req, res) => {
    const { projectName } = req.body;
    console.log(projectName);

    try {
        const project = await ProjectSchema.create({
            projectName: projectName
        });
        
        res.status(201).json({ project });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

export const getProject = async (req, res) => {
    try {
        const project = await ProjectSchema.find();
        res.status(200).json({ project });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}