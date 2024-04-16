import { useState } from "react";
import Overlay from "../pages/Overlay";
import "../styles/AddNew.css";
import useStore from "../useStore";
import { useParams } from "next/navigation";

export default function EditBoard({ editBoard, setEditBoard }: any) {
  const {
    columns,
    setColumns,
    data,
    setData,
    editBoardName,
    setEditBoardName,
    clicked,
  }: any = useStore();
  const params = useParams<any>();

  const editBoardFunction = () => {
    const boardIndex = data.boards.findIndex(
      (board: any) => board.name.replace(" ", "-") === params.main
    );

    if (boardIndex !== -1) {
      const newName = editBoardName.trim();
      if (newName) {
        const updatedBoards = [...data.boards];
        updatedBoards[boardIndex] = {
          ...updatedBoards[boardIndex],
          name: newName,
        };
        setData({ boards: updatedBoards });
      } else {
        console.error("New name is empty.");
      }
    } else {
      console.error("Board not found:", params.main);
    }
    setEditBoard(false);
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: columns.length + 1,
      value: "", // Set initial value as empty string or any default value you want
    };
    setColumns([...columns, newColumn]);
  };

  const handleInputChange = (id: number, value: string) => {
    const updatedColumns = columns.map((column: any) =>
      column.id === id ? { ...column, value: value } : column
    );
    setColumns(updatedColumns);
  };
  console.log("edit board: ", editBoardName);
  return (
    <>
      <Overlay isOpen={editBoard} onClose={() => setEditBoard(false)} />
      <div className="addnew__container absolute bg-white p-6 rounded-md ">
        <h1 className="text-black font-sans font-semibold text-lg pb-6">
          Edit Board
        </h1>
        <div>
          <div>
            <h3 className="text-gray-500 font-semibold pb-2 ">Board Name</h3>
            <input
              placeholder={params.main}
              className="p-2 text-[14px] w-full border border-gray-300 rounded-md  bg-white"
              type="text"
              value={editBoardName}
              onChange={(e) => setEditBoardName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h3 className="text-gray-500 font-semibold pt-4 pb-2">
            Board Columns
          </h3>
          {columns.map((column: any) => (
            <input
              key={column.id}
              className="p-2 mt-2- mb-2 text-[14px] w-full border border-gray-300 rounded-md  bg-white"
              placeholder="TODO"
              value={column.value}
              onChange={(e) => handleInputChange(column.id, e.target.value)}
              required
            />
          ))}
          <button
            onClick={handleAddColumn}
            className="w-full h-10 mt-3 mb-5 rounded-full bg-opacity-10 bg-purple-400 text-purple-600 text-center text-sm font-semibold leading-5"
          >
            Add New Column
          </button>
        </div>
        <button
          onClick={() => {
            setEditBoard(false);
            editBoardFunction();
          }}
          className="h-[40px] w-full rounded-[40px] mt-6 bg-indigo-600 text-white text-center font-bold text-base leading-6"
        >
          Save Changes
        </button>
      </div>
    </>
  );
}
