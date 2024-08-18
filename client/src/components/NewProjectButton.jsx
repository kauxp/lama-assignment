import React, { useState } from 'react';
import Plus from '../assets/Plus';
const NewProjectButton = ({onClick}) => {
    
    return (
        <div className="flex justify-center mt-4">
            <button className="flex flex-row rounded-[3px] justify-center items-center bg-black text-white py-3 px-5" onClick={onClick} ><Plus/><span className="ml-2">Create New Project</span></button>
        </div>
    )
}
export default NewProjectButton;