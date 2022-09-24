import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { editItem } from '../../redux/slices/notes/slice';

interface EditModalType {
    isOpen: boolean,
    setIsOpen: any,
    note: {
        id: number,
        name: string,
        created: string,
        category: string,
        content: string,
        dates: string[]
    }
}

const EditModal : React.FC<EditModalType> = ({isOpen, setIsOpen, note}) => {
    const dispatch = useDispatch();
    const [newName, setName] = React.useState(note.name);
    const [newCategory, setCategory] = React.useState(note.category);
    const [newContent, setContent] = React.useState(note.content);

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        setName(event.target.value);
        note.name = event.target.value;
    }

    const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) : void => {
        setCategory(event.target.value)
        note.category = event.target.value;

    }

    const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
        setContent(event.target.value);
        note.content = event.target.value;

    }

    const onClickSave = () : void => {
        dispatch(editItem(note));
        setIsOpen(false);
    }

    if(!isOpen) return <></>

    return ReactDOM.createPortal(<>
    <div className="modal">
        <div className="modalHead">
            <h3>edit note</h3>
        </div>
        <div className="modalBody">
            <form>
                <label htmlFor="name">Name:</label>
                <input onChange={onChangeName} 
                    value={newName} 
                    id="nameInForm" 
                    type="text" 
                    name="name" />
                <label htmlFor="category">Category:</label>
                <select 
                    onChange={onChangeCategory} 
                    value={newCategory} 
                    id="categoryInForm" 
                    name="category">
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                    <option value="Quote">Quote</option>
                </select>
                <label htmlFor="content">Content:</label>
                <textarea onChange={onChangeContent}
                    value={newContent} 
                    id="contentInForm" 
                    name="content"></textarea>
            </form>
            <button disabled={!newName || !newContent} onClick={onClickSave} id="btnSaveItem">Save</button>
        </div>
    </div><div id="overlay"></div>
    </>, document.body)
}

export default EditModal