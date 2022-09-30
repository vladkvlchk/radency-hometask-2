import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, archiveItem } from "../../redux/slices/notes/slice";

import editUrl from '../../assets/edit.svg'
import archiveUrl from '../../assets/archive.svg'
import deleteUrl from '../../assets/delete.svg'
import EditModal from "../modals/EditModal";

interface ForMainType {
    id: number,
    imageUrl: string,
    name: string,
    created: string,
    category: string,
    content: string,
    dates: string[]
}

const ForMain : React.FC<ForMainType> = ({id, imageUrl, name, created, category, content, dates}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = React.useState(false);

    const onClickEdit = () : void => {
        setIsEdit(true);
    }

    const onClickArchive = () : void => {
        dispatch(archiveItem(id));
    }

    const onClickDelete = () : void => {
        dispatch(removeItem(id));
    }

    return(<>
    <div className="bg-indigo-300 h-14 my-1.5 rounded-md flex items-center overflow-hidden">
        <div className="w-20 truncate">
            <div className="bg-gray-500 h-10 w-10 rounded-md m-auto p-1.5">
                <img src={imageUrl || ''} alt={category} className="w-8 h-8 fill-white"/>
            </div>
        </div>
        <div className="w-40 truncate">{name ? name : '[no name]'}</div>
        <div className="w-36 truncate">{created}</div>
        <div className="w-36 truncate">{category}</div>
        <div className="w-36 truncate">{content ? content : '[no content]'}</div>
        <div className="w-40 truncate">{dates?.join(', ')}</div>
        <div className="w-36 truncate">
            <div className="flex h-full">
                <button onClick={onClickEdit} className="m-0 p-0 border-none bg-transparent hover:bg-transparent hover:opacity-70">
                    <img src={editUrl} alt='edit' className="h-6 w-6 m-1"/>
                </button>
                <button onClick={onClickArchive} className="m-0 p-0 border-none bg-transparent hover:bg-transparent hover:opacity-70">
                    <img src={archiveUrl} alt='archive' className="h-6 w-6 m-1"/>
                </button>
                <button onClick={onClickDelete} className="m-0 p-0 border-none bg-transparent hover:bg-transparent hover:opacity-70">
                    <img src={deleteUrl} alt='delete' className="h-6 w-6 m-1"/>
                </button>
            </div>
        </div>
    </div>
    {isEdit ? <EditModal isOpen={isEdit} setIsOpen={setIsEdit} note={{id, name, created, category, content, dates}} /> : <></>}
</>)}

export default ForMain