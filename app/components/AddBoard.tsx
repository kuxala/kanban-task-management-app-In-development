import { useState } from "react";
import "../styles/AddNew.css";
import useStore from "../useStore";
import Overlay from "../pages/Overlay";

export default function AddBoard() {
  const { boards, setBoards, addNewBoard, setAddNewBoard, data }: any =
    useStore();

  const [newBoardName, setNewBoardName] = useState("");
  const [columnNames, setColumnNames] = useState<string[]>([""]);

  const handleAddColumn = () => {
    setColumnNames([...columnNames, ""]);
  };

  const handleRemoveColumn = (indexToRemove: number) => {
    setColumnNames(columnNames.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoardName(e.target.value);
  };

  const handleColumnInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedColumnNames = [...columnNames];
    updatedColumnNames[index] = e.target.value;
    setColumnNames(updatedColumnNames);
  };

  const handleSaveChanges = () => {
    const newBoard = {
      name: newBoardName,
      columns: columnNames.map((columnName) => ({
        name: columnName,
        tasks: [],
      })),
    };
    setBoards([...boards, newBoard]); // Adding the new board to the existing array of boards
    setAddNewBoard(false);
  };
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
              value={newBoardName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h3 className="text-gray-500 font-semibold pt-4 pb-2">Columns</h3>
            {columnNames.map((columnName, index) => (
              <div className="flex items-center gap-2" key={index}>
                <input
                  className="p-2 mt-2- mb-2 text-[14px] w-full border border-gray-300 rounded-md  bg-white"
                  placeholder="TODO"
                  value={columnName}
                  onChange={(e) => handleColumnInputChange(e, index)}
                  required
                />
                <button
                  onClick={() => handleRemoveColumn(index)}
                  className="text-red-500"
                >
                  <img src="/assets/icon-cross.svg" alt="Delete Column" />
                </button>
              </div>
            ))}
            <button
              onClick={handleAddColumn}
              className="w-full h-10 mt-3 mb-5 rounded-full bg-opacity-10 bg-purple-400 text-purple-600 text-center text-sm font-semibold leading-5"
            >
              Add New Column
            </button>
          </div>

          <button
            type="submit"
            className="h-[40px] w-full rounded-[40px] mt-6 bg-indigo-600 text-white text-center font-bold text-base leading-6"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
