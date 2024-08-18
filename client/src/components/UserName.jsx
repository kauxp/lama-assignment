const UserName = ({ name, userPage }) => {
    return (
        <div onClick={userPage} className="flex pb-10 gap-x-3">
            <div className="w-[46.42px] h-[46.42px] bg-slate-800 rounded-[5px]"></div>
            <div className="flex flex-col items-start">
                <div className="font-bold">Username</div>
                <div className="text-sm ">username@gmail.com</div>
            </div>
        </div>
    )
}
export default UserName;