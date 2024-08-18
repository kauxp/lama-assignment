import BackArrow from "../assets/BackArrow";
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

const EditWindow = ({ onClick, podcast }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState("");

    const scriptRef = useRef();

    useEffect(() => {
        const fetchPodcastScript = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:5000/podcast/podcast/${podcast._id}`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
                setText(response.data.podcast.podcastScript);
            } catch (err) {
                console.error('Error fetching podcast script:', err);
            }
        };

        if (podcast._id) {
            fetchPodcastScript();
        }
    }, [podcast._id]);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = async () => {

        const podcastId = podcast._id;
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`http://localhost:5000/podcast/edit/${podcastId}`, {
                podcastScript: scriptRef.current.innerText
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            console.log("Save response:", response);
            setText(scriptRef.current.innerText);
            setIsEditing(false);
        } catch (err) {
            console.error('Error saving edited text:', err);
        }
    };

    const handleDiscard = () => {
        scriptRef.current.innerText = text;
        setIsEditing(false);
    }


    return (
        <div className="flex flex-col w-full gap-y-10">
            <div className="flex justify-between w-full">
                <div onClick={onClick} className="flex items-center space-x-6">
                    <BackArrow />
                    <div className="text-4xl font-semibold">Edit Window</div>
                </div>
                <div className="flex justify-center items-center">

                    {isEditing ? (
                        <div className="flex space-x-4">
                            <button
                                onClick={handleSaveClick}
                                className="bg-black text-white pl-10 pr-10 font-semibold pt-1 pb-1 text-lg rounded-[5px]">
                                Save
                            </button>
                            <button
                                onClick={handleDiscard}
                                className=" text-[#E01919] border border-solid border-[#E01919] pl-10 pr-10 font-semibold pt-1 pb-1 text-lg rounded-[5px]">
                                Discard
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleEditClick}
                            className="bg-black text-white pl-10 pr-10 font-semibold pt-1 pb-1 text-lg rounded-[5px]">
                            Edit
                        </button>
                    )}
                </div>
            </div>
            <div className="bg-white shadow-lg flex flex-col items-start p-9 rounded-[5px] pl-16 space-y-9 w-full">
                <div className="text-[#7E22CE] font-semibold text-lg">Speaker</div>
                <div ref={scriptRef} className="text-[#63635E] text-left text-lg w-full outline-none" contentEditable={isEditing}>{text}</div>
            </div>
        </div>
    )
}
export default EditWindow;