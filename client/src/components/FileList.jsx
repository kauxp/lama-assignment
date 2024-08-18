import NextArrow from "../assets/NextArrow";

const FileList = ({ num, name, upload, status, id, onClick , onDelete}) => {
    return (
        <div className="relative flex items-center p-4 w-full h-[56px] border-b">
            <div className="w-1/12 text-center">{num}</div>
            <div className="w-4/12 truncate">{name}</div>
            <div className="w-3/12 text-center">{upload}</div>
            <div className="w-2/12 text-center flex justify-center items-center">
                <div className={`bg-[#FFE091] w-1/2 rounded-[20px] font-semibold text-yellow-600 ${status === "Done" ? "bg-[#DFBAFF] text-[#7E23CD]" : ""}`}>
                    {status}
                </div>
            </div>
            <div className="w-2/12 flex justify-center items-center space-x-2">
                <div className="flex items-center gap-x-2 border border-solid border-[#C7C7C7] rounded-[10px] p-2 ">
                    <button onClick={onClick} className="text-[#646464]">View</button>
                    <div className="w-[1px] h-5 bg-[#C7C7C7]"></div>
                    <button onClick={() => onDelete(id)} className="text-red-500">Delete</button>
                </div>
            </div>
            <div className="absolute right-4">
                <NextArrow />
            </div>
        </div>
    );
};

export default FileList;
