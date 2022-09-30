import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { editItem } from "../../redux/slices/notes/slice";

interface EditModalType {
  isOpen: boolean;
  setIsOpen: any;
  note: {
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string[];
  };
}

const EditModal: React.FC<EditModalType> = ({ isOpen, setIsOpen, note }) => {
  const dispatch = useDispatch();
  const [newName, setName] = React.useState(note.name);
  const [newCategory, setCategory] = React.useState(note.category);
  const [newContent, setContent] = React.useState(note.content);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
    note.name = event.target.value;
  };

  const onChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategory(event.target.value);
    note.category = event.target.value;
  };

  const onChangeContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContent(event.target.value);
    note.content = event.target.value;
  };

  const onClickSave = (): void => {
    dispatch(editItem(note));
    setIsOpen(false);
  };

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(
    <>
      <div className="fixed w-150 min-h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-50 z-20">
        <div className="w-full text-white bg-blue-700 text-center pt-3.5 pb-3.5">
          <h3>edit note</h3>
        </div>
        <form className="flex-col w-96 mt-5 mx-auto">
          <label htmlFor="name">Name:</label>
          <input
            onChange={onChangeName}
            value={newName}
            id="nameInForm"
            type="text"
            name="name"
            className="w-full m-2 py-2.5 px-5 focus:outline-none border-black border rounded"
          />
          <label htmlFor="category">Category:</label>
          <select
            onChange={onChangeCategory}
            value={newCategory}
            id="categoryInForm"
            name="category"
            className="w-full m-2 py-2.5 px-5 focus:outline-none border-black border rounded"
          >
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
            <option value="Quote">Quote</option>
          </select>
          <label htmlFor="content">Content:</label>
          <textarea
            onChange={onChangeContent}
            value={newContent}
            id="contentInForm"
            name="content"
            className="w-full h-14 m-2 py-2.5 px-5 focus:outline-none border-black border rounded"
          ></textarea>
        </form>
        <button
          disabled={!newName || !newContent}
          onClick={onClickSave}
          className="m-4 ml-1/2 -translate-x-1/2 border border-blue-600 rounded py-2 px-4 text-blue-600 hover:bg-blue-600 hover:text-white active:scale-95 disabled:border-gray-600 disabled:text-gray-600 disabled:hover:bg-gray-600 disabled:hover:text-white"
        >
          Save
        </button>
      </div>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-70 z-10"></div>
    </>,
    document.body
  );
};

export default EditModal;
