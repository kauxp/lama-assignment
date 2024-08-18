import React, { useEffect, useState } from "react";
import QuesLogo from "../assets/QuesLogo";
import SittingPeople from "../assets/SittingPeople";
import Plus from "../assets/Plus";
import NotificationsIcon from "../assets/NotificationsIcon";
import SettingsIcon from "../assets/SettingsIcon";
import CreateProject from "./CreateProject";
import NewProjectButton from "./NewProjectButton";
import Project from "./Project"
import axios from 'axios';

const CreateNewProject = () => {

    const [projectName, setProjectName] = useState('');
    const [project, setProject] = useState(false);
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [background, setBackground] = useState(false);
    const [projectsArray, setProjectsArray] = useState([]);

    const fetchProjects = async () => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('No token found');
            }

            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/project`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            // console.log(response.data);

            setProjectsArray(response.data.project);
            setProject(true);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handelInputChange = (e) => {
        // setBackground(false);
        setProjectName(e.target.value);
    }
    const handelCancel = () => {
        setShowCreateProject(false);
        setBackground(false);
    }

    const handelCreateProject = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage

            if (!token) {
                throw new Error('No token found');
            }

            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/project`,
                { projectName: projectName },
                {
                    headers: {
                        authorization: `Bearer ${token}` // Attach JWT token in the header
                    }
                }
            );

            const newProject = response.data.project;
            setProjectsArray([...projectsArray, newProject]);
            setProject(true);
            setBackground(false);
            setShowCreateProject(false);
        } catch (error) {
            console.error('Error creating project:', error);
        }
    }

    const renderCreateProject = () => {
        setShowCreateProject(true);
        setBackground(!background);
    }

    return (
        <div className={`relative z-100 pt-10 pl-10 pr-10 h-screen ${background ? 'bg-[#93939366]' : 'bg-white'}`}>
            <div className="flex flex-row  justify-between">
                <QuesLogo width="268" height="57" fill="#7E22CE" />
                <div className="flex flex-row space-x-3">
                    <SettingsIcon />
                    <NotificationsIcon />
                </div>
            </div>

            {!project && (
                <div>
                    <div className="flex flex-col items-center mt-10 p-4">
                        <div className="text-[#7E22CE] font-bold text-5xl">Create a New Project</div>
                        <div className="mt-7"><SittingPeople width="442.49" height="296.9" /></div>
                    </div>
                    <div className="flex items-center flex-col justify-center mt-2">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio tempore modi. Quia ratione accusamus inventore dolore</div>
                        <div>aut enim sapiente, quisquam reprehenderit, officiis earum temporibus soluta!</div>
                        <div>Necessitatibus ipsum consectetur excepturi?</div>
                    </div>
                    <NewProjectButton onClick={renderCreateProject} />
                    {showCreateProject && <CreateProject onInput={handelInputChange} onCreate={handelCreateProject} onCancel={handelCancel} />}
                </div>
            )}


            {project && (
                <div className="mt-10">
                    <div className="flex flex-row justify-between">
                        <div className="text-3xl text-[#7E22CE] font-bold">Projects</div>
                        <NewProjectButton onClick={renderCreateProject} />
                        {showCreateProject && <CreateProject onInput={handelInputChange} onCreate={handelCreateProject} onCancel={handelCancel} />}


                    </div>
                    <div className="grid grid-cols-4 gap-y-10 pt-10">
                        {projectsArray.map((newProject) => {
                            return (<Project newProject={newProject} />)
                        })}
                    </div>
                </div>
            )}
        </div>

    )
}
export default CreateNewProject;