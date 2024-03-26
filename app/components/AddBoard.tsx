import { useState } from "react";
import "../styles/AddNew.css";
import useStore from "../useStore";
import Overlay from "../pages/Overlay";

export default function AddBoard() {
  const {
    data,
    setData,
    columns,
    setColumns,
    addNewBoard,
    setAddNewBoard,
    addNewBoardName,
    setAddNewBoardName,
  }: any = useStore();
  const newBoard = {
    name: addNewBoardName,
    columns: columns,
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: columns.length + 1,
      value: "",
    };
    setColumns([...columns, newColumn]);
  };

  const handleInputChange = (id: number, value: string) => {
    const updatedColumns = columns.map((column: any) =>
      column.id === id ? { ...column, value: value } : column
    );
    setColumns(updatedColumns);
  };

  const handleDeleteColumn = (id: number) => {
    const updatedColumns = columns.filter((column: any) => column.id !== id);
    setColumns(updatedColumns);
  };
  const handleAddBoard = (e: any) => {
    setAddNewBoardName(e.target.value);
  };
  console.log("data before: ", data.boards);
  const dataPush = () => {
    data.boards.push({ name: addNewBoardName, columns: columns });
  };

  console.log("data after: ", data.boards);
  return (
    <>
      <Overlay isOpen={addNewBoard} onClose={() => setAddNewBoard(false)} />
      <div className="addnew__container absolute bg-white p-6 rounded-md ">
        <h1 className="text-black font-sans font-semibold text-lg pb-6">
          Add New Board
        </h1>
        <div>
          <div>
            <h3 className="text-gray-500 font-semibold pb-2">Name</h3>
            <input
              placeholder="e.g Web Design"
              className="p-2 text-[14px] w-full border border-gray-300 rounded-md  bg-white"
              type="text"
              onChange={handleAddBoard}
            />
          </div>

          <div>
            <h3 className="text-gray-500 font-semibold pt-4 pb-2">Columns</h3>
            {columns.map((column: any) => (
              <div key={column.id} className="flex items-center gap-2">
                <input
                  className="p-2 mt-2- mb-2 text-[14px] w-full border border-gray-300 rounded-md  bg-white"
                  placeholder="TODO"
                  value={column.value}
                  onChange={(e) => handleInputChange(column.id, e.target.value)}
                  required
                />
                <img
                  src="/assets/icon-cross.svg"
                  onClick={() => handleDeleteColumn(column.id)}
                />
              </div>
            ))}
            <button
              onClick={handleAddColumn}
              className="w-full h-10 mt-3 mb-5 rounded-full bg-opacity-10 bg-purple-400 text-purple-600 text-center text-sm font-semibold leading-5"
            >
              Add New Column
            </button>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold pb-2">Status</h3>
            <select className="w-full h-12 border border-gray-300 rounded-md p-2 bg-white">
              <option value="1">Todo</option>
              <option value="2">Doing</option>
              <option value="2">Done</option>
            </select>
          </div>
          <button
            type="submit"
            className=" h-[40px] w-full rounded-[40px] mt-6 bg-indigo-600 text-white text-center font-bold text-base leading-6"
            onClick={() => {
              setAddNewBoard(false);
              dataPush();
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
