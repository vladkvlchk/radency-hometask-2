import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import NewNoteModal from "./modals/NewNoteModal";

const mainTitle = (
  <>
    <p className="w-20 truncate"></p>
    <p className="w-40 truncate">Name</p>
    <p className="w-36 truncate">Created</p>
    <p className="w-36 truncate">Category</p>
    <p className="w-36 truncate">Content</p>
    <p className="w-40 truncate">Dates</p>
    <p className="w-36 truncate">Actions</p>
  </>
);

const summaryTitle = (
  <>
    <p className="w-20 truncate"></p>
    <p className="w-40 truncate">Note category</p>
    <p className="w-40 truncate"></p>
    <p className="w-36 truncate">Active</p>
    <p className="w-36 truncate">Archived</p>
  </>
);

const archiveTitle = (
  <>
    <p className="w-20 truncate"></p>
    <p className="w-40 truncate">Name</p>
    <p className="w-36 truncate">Created</p>
    <p className="w-36 truncate">Category</p>
    <p className="w-36 truncate">Content</p>
    <p className="w-40 truncate">Dates</p>
    <p className="w-36 truncate">Actions</p>
  </>
);

const Table: React.FC<{ type: "main" | "summary" | "archive" }> = ({
  type,
}) => {
  const items = useSelector((state: RootState) => state.notes.items);
  const archive = useSelector((state: RootState) => state.notes.archive);

  const calcSummaries = () => {
    const summaries = [];

    sumOfCategory("Task");
    sumOfCategory("Random Thought");
    sumOfCategory("Idea");
    sumOfCategory("Quote");

    function sumOfCategory(category: string) {
      const active = items.reduce((count: number, current: any) => {
        return current.category === category ? count + 1 : count;
      }, 0);
      const archived = archive.reduce((count: number, current: any) => {
        return current.category === category ? count + 1 : count;
      }, 0);

      if (active || archived) {
        summaries.push({ category, active, archived });
      }
    }

    return summaries;
  };
  const summaries = calcSummaries();

  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const onClickNewNote = (): void => {
    setIsOpenModal(true);
  };

  const titles =
    type === "main" ? (
      mainTitle
    ) : type === "summary" ? (
      summaryTitle
    ) : type === "archive" ? (
      archiveTitle
    ) : (
      <></>
    );

  return (
    <>
      <div className={`m-auto mt-12 max-w-4xl `}>
        <div className="text-center">{type.toUpperCase()}</div>
        <div
          className={`${
            type === "archive" ? "bg-gray-600" : "bg-blue-700"
          }  flex	items-center text-slate-200	h-16 rounded-md`}
        >
          {titles}
        </div>
        {(type === "main"
          ? items
          : type === "summary"
          ? summaries
          : type === "archive"
          ? archive
          : []
        ).map((obj: any) => (
          <Item
            key={
              `${obj?.id}_${obj?.name}_${obj?.content}_${obj?.category}` ||
              obj?.category
            }
            obj={obj}
            type={type}
          />
        ))}
        {type === "main" ? (
          <button onClick={onClickNewNote} className="float-right border border-blue-600 rounded py-2 px-4 text-blue-600 hover:bg-blue-600 hover:text-white active:scale-95">
            Create Note
          </button>
        ) : (
          <></>
        )}
      </div>
      <NewNoteModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </>
  );
};

export default Table;
