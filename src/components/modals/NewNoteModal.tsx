import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { pushItem } from '../../redux/slices/notes/slice';

interface NewNoteModalType {
    isOpen: boolean,
    setIsOpen: any
}

const NewNoteModal : React.FC<NewNoteModalType> = ({isOpen, setIsOpen}) => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('Task');
    const [content, setContent] = React.useState('');

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        setName(event.target.value)
    }

    const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) : void => {
        setCategory(event.target.value)
    }

    const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
        setContent(event.target.value)
    }

    const onClickSave = () : void => {
        if(validation()){
            dispatch(pushItem({name, category, content}));
            setIsOpen(false);
        } else {
            alert('Invalid note!')
        }
    }

    function validation(): boolean {
        if(name.replaceAll(' ', '') === '') return false
        if(content.replaceAll(' ', '') === '') return false
        return true
    }

    if(!isOpen) return <></>

    return ReactDOM.createPortal(<>
    <div className="modal">
        <div className="modalHead">
            <h3>create note</h3>
        </div>
        <div className="modalBody">
            <form>
                <label htmlFor="name">Name:</label>
                <input onChange={onChangeName} 
                    value={name} 
                    id="nameInForm" 
                    type="text" 
                    name="name" />
                <label htmlFor="category">Category:</label>
                <select 
                    onChange={onChangeCategory} 
                    value={category} 
                    id="categoryInForm" 
                    name="category">
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                    <option value="Quote">Quote</option>
                </select>
                <label htmlFor="content">Content:</label>
                <textarea onChange={onChangeContent}
                    value={content} 
                    id="contentInForm" 
                    name="content"></textarea>
            </form>
            <button onClick={onClickSave} id="btnSaveItem">Save</button>
        </div>
    </div><div id="overlay"></div>
    </>, document.body)
}

export default NewNoteModal