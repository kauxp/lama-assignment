import UploadYtIcon from "../assets/UploadYtIcon";
import Cross from "../assets/Cross";
import RssFeed from "../assets/RssFeed";
import UploadFiles from "../assets/UploadFiles";

const UploadYt = ({ onClick, onUpload, onInput, onUrl, header }) => {
    return (
        <div className="absolute z-100 top-0 left-0 right-0 bottom-0 bg-[#93939366] ">
            <div className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1257px] h-[529.26px] bg-[#fff] p-4 rounded-[20px] z-100">
                <div className="flex flex-col items-start space-y-6 p-12">
                    <div className="w-full flex flex-row items-center space-x-6 justify-between">
                        <div className="flex flex-row items-center space-x-6">
                            {header === "Youtube" && <UploadYtIcon />}
                            {header === "RSS Feed" && <RssFeed />}
                            {header === "Local System" && <UploadFiles />}
                            <div className="text-4xl font-bold">Upload from {header}</div>
                        </div>
                        <div onClick={onClick}><Cross /></div>
                    </div>
                    <div className="text-2xl space-y-4 w-full">
                        <div className="space-y-2">
                            <div className="flex flex-col items-start font-light">Name</div>
                            <input type="text" onChange={onInput} className="p-4 w-full border-[2px] border-black border-solid rounded-[5px]"></input>
                        </div>
                        <div className="space-y-2">
                            <div className="flex flex-col items-start font-light">Link</div>
                            <input type="url" onChange={onUrl} className="p-4 w-full border-[2px] border-black border-solid rounded-[5px]"></input>
                        </div>
                    </div>
                    <div className="flex justify-end items-end w-full">
                        <button className=" p-3 pl-6 pr-6 rounded-[5px] text-lg bg-black text-white" onClick={onUpload}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UploadYt;