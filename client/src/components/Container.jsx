import YoutubeLogo from "../assets/YoutubeLogo";
const Container = ({ onClick, image, header, description }) => {
    return (
        <div onClick={onClick} className="w-[418.67px] h-[202.67px] bg-white rounded-xl flex p-7 pt-10 shadow-md">
            <div className="flex flex-col items-start space-y-3">
                <div className="text-3xl font-semibold">{header}</div>
                <div className="text-sm text-[#646464] text-left">{description}</div>
            </div>
            <div>
                {image}
            </div>
        </div>
    )
}
export default Container;