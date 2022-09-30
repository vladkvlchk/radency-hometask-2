import React from "react";

interface ForSummaryType {
    imageUrl: string,
    name: string,
    active: number,
    archived: number
}

const ForSummary : React.FC<ForSummaryType> = ({imageUrl, name, active, archived}) => {

    return(<>
    <div className="bg-indigo-300 h-14 my-1.5 rounded-md flex items-center overflow-hidden">
        <div className="w-20 truncate">
            <div className="bg-gray-500 h-10 w-10 rounded-md m-auto p-1.5">
                <img src={imageUrl} alt={name} className="w-8 h-8 fill-white"/>
            </div>
        </div>
        <div className="w-40 truncate">{name}</div>
        <div className="w-40 truncate"></div>
        <div className="w-36 truncate">{active}</div>
        <div className="w-36 truncate">{archived}</div>
    </div>
</>)}

export default ForSummary