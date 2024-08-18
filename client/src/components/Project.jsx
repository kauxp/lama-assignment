import ProjectWindow from "./ProjectWindow";
import { useNavigate } from "react-router-dom";

const Project = ({ newProject}) => {

    const projectId = newProject._id;
    const name = newProject.projectName;

    const projectAvatar = "https://avatar.iran.liara.run/username?username=" + name + "&background=F8A01D&color=fff&size=200&font=IRANSans";
    const navigate = useNavigate();

    const renderProjectWindow = () => {
        navigate(`/project/${projectId}`);
    }

    return (
        <div onClick={renderProjectWindow} className="flex w-[22vw] h-[16vh] border-solid border-2 rounded-[10px] p-2.5">
            <div className="w-[8vw] h-[13vh] bg-[#F8A01D] rounded-[10px] overflow-hidden relative">
                <img src={projectAvatar} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="flex flex-col p-5 justify-start items-start">
                <div className="text-[#7E22CE] font-semibold">{name}</div>
                <div>4 Episodes</div>
                <div className="text-slate-400 mt-4">Last edited a week ago</div>
            </div>
        </div>
    )
}
export default Project;