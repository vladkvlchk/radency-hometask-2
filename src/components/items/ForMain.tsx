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
    <div className="item">
        <div className="titleSmall">
            <div className="itemImage">
                <img src={imageUrl || ''} alt={category}/>
            </div>
        </div>
        <div className="titleBig">{name ? name : '[no name]'}</div>
        <div className="titleMiddle">{created}</div>
        <div className="titleMiddle">{category}</div>
        <div className="titleMiddle">{content ? content : '[no content]'}</div>
        <div className="titleBig">{dates?.join(', ')}</div>
        <div className="titleMiddle">
            <div className="actions">
                <button onClick={onClickEdit} className="action btnEdit">
                    <img src={editUrl} alt='edit'/>
                </button>
                <button onClick={onClickArchive} className="action btnArchive">
                    <img src={archiveUrl} alt='archive'/>
                </button>
                <button onClick={onClickDelete} className="action btnDelete">
                    <img src={deleteUrl} alt='delete'/>
                </button>
            </div>
        </div>
    </div>
    {isEdit ? <EditModal isOpen={isEdit} setIsOpen={setIsEdit} note={{id, name, created, category, content, dates}} /> : <></>}
</>)}

export default ForMain