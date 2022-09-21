import React from "react";

interface ForSummaryType {
    imageUrl: string,
    name: string,
    active: number,
    archived: number
}

const ForSummary : React.FC<ForSummaryType> = ({imageUrl, name, active, archived}) => {

    return(<>
    <div className="item">
        <div className="titleSmall">
            <div className="itemImage">
                <img src={imageUrl} alt={name}/>
            </div>
        </div>
        <div className="titleBig">{name}</div>
        <div className="titleBig"></div>
        <div className="titleMiddle">{active}</div>
        <div className="titleMiddle">{archived}</div>
    </div>
</>)}

export default ForSummary