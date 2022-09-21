import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import NewNoteModal from "./modals/NewNoteModal";

const mainTitle = <>
    <p className="titleSmall"></p>
    <p className="titleBig">Name</p>
    <p className="titleMiddle">Created</p>
    <p className="titleMiddle">Category</p>
    <p className="titleMiddle">Content</p>
    <p className="titleBig">Dates</p>
    <p className="titleMiddle">Actions</p>
</>

const summaryTitle = <>
    <p className="titleSmall"></p>
    <p className="titleBig">Note category</p>
    <p className="titleBig"></p>
    <p className="titleMiddle">Active</p>
    <p className="titleMiddle">Archived</p>
</>

const archiveTitle = <>
    <p className="titleSmall"></p>
    <p className="titleBig">Name</p>
    <p className="titleMiddle">Created</p>
    <p className="titleMiddle">Category</p>
    <p className="titleMiddle">Content</p>
    <p className="titleBig">Dates</p>
    <p className="titleMiddle">Actions</p>
</>

const Table : React.FC<{type: 'main' | 'summary' | 'archive'}> = ({type}) => {
    const items = useSelector((state: RootState) => state.notes.items);
    const archive = useSelector((state: RootState) => state.notes.archive);
    
    const calcSummaries = () => {
        const summaries = [];
        
        sumOfCategory("Task");
        sumOfCategory("Random Thought");
        sumOfCategory("Idea");
        sumOfCategory("Quote");
        
        function sumOfCategory(category : string){
            const active = items.reduce((count : number, current : any) => {
                return current.category === category ? count + 1 : count
            }, 0);
            const archived = archive.reduce((count : number, current : any) => {
                return current.category === category ? count + 1 : count
            }, 0);
            
            if(active || archived){
                summaries.push({category, active, archived});
            }
        }
        
        return summaries
    }
    const summaries = calcSummaries();
    
    const [isOpenModal, setIsOpenModal] = React.useState(false);

    const onClickNewNote = () : void => {
        setIsOpenModal(true);
    }
    
    const titles = (
    type === 'main' ? mainTitle : 
    type === 'summary' ? summaryTitle :
    type === 'archive' ? archiveTitle : <></>)

    return(<>
    <div className={`table table_${type}`}>
        <div className="nameOfTable">{type.toUpperCase()}</div>
        <div className={`titles ${type === 'archive' ? 'titles_archive' : ''}`}>
            {titles}
        </div>
        <div className="items">
            {(type === 'main' ? items :
            type === 'summary' ? summaries :
            type === 'archive' ? archive : []).map((obj: any) => <Item key={`${obj?.id}_${obj?.name}_${obj?.content}_${obj?.category}` || obj?.category}
                                                                obj={obj}
                                                                type={type} />)}
        </div>
        {type === 'main' ? <button onClick={onClickNewNote} className="addItemBtn">Create Note</button> : <></>}
    </div>
    <NewNoteModal isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
</>)}

export default Table;