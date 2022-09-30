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
    <div className="bg-gray-300 h-14 my-1.5 rounded-md flex items-center overflow-hidden">
        <div className="w-20 truncate">
            <div className="bg-gray-500 h-10 w-10 rounded-md m-auto p-1.5">
                <img src={imageUrl} alt={category} className="w-8 h-8 fill-white"/>
            </div>
        </div>
        <div className="w-40 truncate">{name ? name : '[no title]'}</div>
        <div className="w-36 truncate">{created}</div>
        <div className="w-36 truncate">{category}</div>
        <div className="w-36 truncate">{content ? content : '[no content]'}</div>
        <div className="w-40 truncate">{dates.join(', ')}</div>
        <div className="w-36 truncate">
            <div className="flex">
                <button onClick={onClickUnarchive} className="m-0 p-0 border-none bg-transparent hover:bg-transparent hover:opacity-70">
                    <img src={unarchiveUrl} alt='unarchive'  className="h-6 w-6 m-1"/>
                </button>
            </div>
        </div>
    </div>)}

export default ForArchive