import QuesLogo from "../assets/QuesLogo";
import CreatePen from "../assets/CreatePen";
import AddPodcast from "../assets/AddPodcast";
import Widget from "../assets/Widget";
import Diamond from "../assets/Diamond";
import SettingsIcon from "../assets/SettingsIcon";
import UserName from "./UserName";

const NavBar = ({ userPage }) => {

    return (
        <nav className="w-[18vw] h-screen flex flex-col  pt-10 pl-9 pr-5 items-start shadow-lg ">
            <div className="flex flex-col h-full gap-y-4">
                <QuesLogo width="240" height="50" fill="#7E22CE" />
                <div className="flex flex-col gap-y-4">
                    <a href='#'><div className="flex items-center hover:bg-[#F3E8FF] p-2 rounded-[9px]"><AddPodcast /><span className="ml-2">Add your Podcast(s)</span></div></a>
                    <a href='#'><div className="flex items-center hover:bg-[#F3E8FF] p-2 rounded-[9px]"><CreatePen /><span className="ml-2">Create & Repurpose</span></div></a>
                    <a href='#'><div className="flex items-center hover:bg-[#F3E8FF] p-2 rounded-[9px]"><Widget /><span className="ml-2">Podcast Widget</span></div></a>
                    <a href='#'><div className="flex items-center hover:bg-[#F3E8FF] p-2 rounded-[9px]"><Diamond /><span className="ml-2">Upgrade</span></div></a>
                </div>
                <div className="h-[1px]  w-[100%] bg-slate-500"></div>
            </div>
            <div className="flex flex-col justify-end gap-7">
                <a href='#'><div className="flex items-center hover:bg-[#F3E8FF] p-2 rounded-[9px]"><SettingsIcon width="18" height="18" /><span className="ml-2">Help</span></div></a>
                <div className="h-[1px]  w-[100%] bg-slate-500"></div>
                <UserName userPage={userPage} />
            </div>
        </nav>
    )
}

export default NavBar;