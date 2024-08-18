const CreateProject = ({onCreate, onCancel, onInput}) => {
    return(
        <div className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55vw]  shadow-lg bg-white p-4 rounded-[20px] z-50">
            <div className="pl-2 flex flex-col items-start space-y-6">
                <div className="font-bold text-3xl">Create Project</div>
                <div className=" text-xl">Enter Project Name:</div>
                <input type="text" placeholder="Type here" className=" text-xl border border-solid p-3 w-full rounded-[10px]" onChange={onInput}></input>
                <div className=" text-red-400">Project Name Can't be empty</div>
                <div className="flex flex-row w-full justify-end space-x-8">
                    <button className=" text-red-400 text-lg" onClick={onCancel}>Cancel</button>
                    <button className="bg-[#7E22CE] text-white p-2 w-[6vw] rounded-[10px]" onClick={onCreate}>Create</button>
                </div>
            </div>
        </div>
    )
}
export default CreateProject;