import { format, set } from 'date-fns';
import NavBar from "./NavBar";
import NavLink from "./NavLink";
import Container from "./Container";
import YoutubeLogo from "../assets/YoutubeLogo";
import RssFeed from "../assets/RssFeed";
import UploadFiles from "../assets/UploadFiles";
import UploadCloud from "../assets/UploadCloud";
import BaldBell from "../assets/BaldBell";
import Logout from "../assets/Logout";
import UploadYt from "./UploadYt";
import { useState, useEffect } from "react";
import FileList from "./FileList";
import EditWindow from "./EditWindow";
import AccountSettings from "./AccountSettings";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectWindow = () => {

    const { id } = useParams();
    const [vewBox, setViewBox] = useState(localStorage.getItem('viewBox') || 'podcast');
    const [viewPodcast, setViewPodcast] = useState('');
    const [podcastUrl, setPodcastUrl] = useState('');
    const [podcastList, setPodcastList] = useState([]);
    const [uploadYt, setUploadYt] = useState(false);
    const [background, setBackground] = useState(true);
    const [podcastName, setPodcastName] = useState('');
    const [header, setHeader] = useState('');
    const [deleting, setDeleting] = useState(false);

    const handleViewBoxChange = (box) => {
        localStorage.setItem('viewBox', box);
        setViewBox(box);
    }

    useEffect(() => {
        const fetchPodcastList = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }
                const url = window.location.href;
                const projectId = url.split('/').pop();
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/podcast/${projectId}/project`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
                const formattedPodcasts = response.data.podcasts.map((podcast, index) => {
                    return {
                        idx: index + 1,
                        podcastName: podcast.podcastName,
                        uploadDateAndTime: podcast.uploadDateAndTime,
                        status: podcast.status,
                        _id: podcast._id
                    };
                }
                );

                setPodcastList(formattedPodcasts);
            } catch (error) {
                console.error('Error fetching podcast list:', error);
            }
        };

        fetchPodcastList();
    }, [id]);

    const handleDelete = (podcastIdDel) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }
            axios.delete(`${process.env.REACT_APP_BACKEND_URL}/podcast/${podcastIdDel}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((response) => {
                    console.log('Delete response:', response);
                    setPodcastList(
                        podcastList.filter((podcast) => {
                            return podcast._id != podcastIdDel;
                        })
                    )
                })
                .catch((error) => {
                    console.error('Error deleting podcast:', error);
                    setDeleting(false);
                });
        } catch (error) {
            console.error('Error handling delete:', error);
        }
    }
    const renderAccountWindow = () => {
        handleViewBoxChange("account");
    }

    const handleUpload = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/podcast`,
                {
                    podcastName: podcastName,
                    podcastUrl: podcastUrl,
                    projectId: id,
                    podcastScript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi",
                    status: "In Progress",
                },
                {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
            ).then((response) => {
                setPodcastList([...podcastList, {
                    idx: podcastList.length + 1,
                    name: response.data.podcast.podcastName,
                    upload: response.data.podcast.uploadDateAndTime,
                    status: "In Progress",
                }]);
                setUploadYt(false);
                setBackground(false);
            }).catch((error) => {
                console.error('Error creating podcast:', error);
            });
        } catch (error) {
            console.error('Error handling upload:', error);
        }
    }

    const handleLogout = () => {
        console.log("here")
        try {
            const token = localStorage.getItem('token')
            localStorage.removeItem(token)
            window.location.href = '/';
        } catch (error) {
            console.error('Logout error:', error);
        }
    }
    const handleBack = () => {
        handleViewBoxChange("podcast");
    }
    const renderUploadYt = (header) => {
        setUploadYt(!uploadYt);
        setBackground(!background);
        setHeader(header);
    }
    const handelCancel = () => {
        setUploadYt(!uploadYt);
        setBackground(!background);
    }
    const handelNameChange = (e) => {
        setPodcastName(e.target.value);
    }
    const handelUrlChange = (e) => {
        setPodcastUrl(e.target.value);
    }

    const renderEditWindow = (e) => {
        setViewPodcast(e);
        handleViewBoxChange("edit");
        console.log("currPod ", e);
    }


    return (
        <div className={`w-full flex relative ${background ? 'backdrop-none' : 'backdrop-blur-3xl'}`}>

            <NavBar userPage={renderAccountWindow} />

            <div className={` pt-5 pl-10 pr-10 w-[82vw] flex flex-col items-start gap-3 ${background ? 'bg-[#F9F9F9]' : ''}`}>
                <div className="flex justify-between w-full">
                    <NavLink />
                    <div className="flex items-center justify-center gap-4">
                        <BaldBell />
                        <div onClick={handleLogout}>
                            <Logout />
                        </div>
                    </div>
                </div>

                {vewBox == "podcast" && (
                    <div className="flex flex-col items-start gap-4">
                        <div className="font-bold text-4xl">Add Podcast</div>
                        <div className="flex gap-x-3">
                            <Container image={<RssFeed />} onClick={() => renderUploadYt("RSS Feed")} header="RSS Feed" description="Lorem ipsum dolor, sit amet consectetur adip" />
                            <Container image={<YoutubeLogo />} onClick={() => renderUploadYt("Youtube")} header="Youtube Video" description="Lorem ipsum dolor, sit amet consectetur adip" />
                            <Container image={<UploadFiles />} onClick={() => renderUploadYt("Local System")} header="Upload Files" description="Lorem ipsum dolor, sit amet consectetur adip" />
                        </div>

                        {(podcastList.length == 0 && <div className="w-[1288px] h-[471px] bg-white rounded-[15px] flex flex-col items-center justify-center gap-y-5 shadow-lg">
                            <UploadCloud />
                            <div className="text-2xl">Select a file or drag and drop here (Podcast Media or Transcription Text)</div>
                            <div className="text-xl text-slate-500">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </div>
                            <button onClick={() => renderUploadYt("Youtube")} className="border-[#7E22CE] border-solid border-[2px] text-[#7E22CE]  p-3 text-2xl  rounded-[50px]">Select File</button>
                            {uploadYt && <UploadYt onClick={handelCancel} onUpload={handleUpload} onInput={handelNameChange} onUrl={handelUrlChange} header={header} />}
                        </div>)}


                        {(podcastList.length != 0 &&
                            <div className="w-full flex flex-col gap-4">
                                <div className="flex items-center p-7 text-[#B87A1F] font-semibold w-full h-[73.33px] bg-[#FFE091] rounded-[15px]">
                                    1 file(s) are in progress, you would get an email on tom@giftkart.app once the transcription is complete.
                                </div>
                                <div className="w-full max-h-[400px] overflow-y-auto rounded-[15px] flex flex-col items-start shadow-lg">
                                    <div className="w-full p-7 flex flex-col items-start gap-y-4">
                                        <div className="font-bold text-2xl">
                                            Your Files
                                        </div>
                                        <div className="bg-[#EDEDED] flex justify-between p-4 w-full rounded-[10px] h-[56px] font-semibold text-gray-700">
                                            <div className="w-1/12 text-center">No.</div>
                                            <div className="w-4/12">Name</div>
                                            <div className="w-3/12 text-center">Upload Date & Time</div>
                                            <div className="w-2/12 text-center">Status</div>
                                            <div className="w-2/12 text-center">Action</div>
                                        </div>
                                        <div className="w-full flex flex-col gap-y-4">
                                            {podcastList.map((podcast, index) => {
                                                return (
                                                    <FileList num={index + 1} name={podcast.podcastName} upload={(podcast.uploadDateAndTime)} status={podcast.status} id={podcast._id} onClick={() => { { renderEditWindow(podcast) } }} onDelete={handleDelete} />
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                                {uploadYt && <UploadYt onClick={handelCancel} onUpload={handleUpload} onInput={handelNameChange} onUrl={handelUrlChange} header={header} />}
                            </div>)}
                    </div>
                )}


                {vewBox == "edit" && <EditWindow onClick={handleBack} podcast={viewPodcast} />}
                {vewBox == "account" && <AccountSettings onClick={handleBack} />}
            </div>

        </div>
    )
}
export default ProjectWindow;