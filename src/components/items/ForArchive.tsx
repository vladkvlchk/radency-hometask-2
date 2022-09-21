import React from "react";
import { useDispatch } from "react-redux";
import { unarchiveItem } from "../../redux/slices/notes/slice";
import unarchiveUrl from '../../assets/unarchive.svg'

interface ForArchiveType {
    id: number,
    imageUrl: string,
    name: string,
    created: string,
    category: string,
    content: string,
    dates: string[]
}

const ForArchive : React.FC<ForArchiveType> = ({id, imageUrl, name, created, category, content, dates}) => {
    const dispatch = useDispatch();

    const onClickUnarchive = () : void => {
        dispatch(unarchiveItem(id));
    }

    return(
    <div className="item itemArchive">
        <div className="titleSmall">
            <div className="itemImage">
                <img src={imageUrl} alt={category}/>
            </div>
        </div>
        <div className="titleBig">{name ? name : '[no title]'}</div>
        <div className="titleMiddle">{created}</div>
        <div className="titleMiddle">{category}</div>
        <div className="titleMiddle">{content ? content : '[no content]'}</div>
        <div className="titleBig">{dates.join(', ')}</div>
        <div className="titleMiddle">
            <div className="actions">
                <button onClick={onClickUnarchive} className="action btnUnarchive">
                    <img src={unarchiveUrl} alt='unarchive'/>
                </button>
            </div>
        </div>
    </div>)}

export default ForArchive