import { useState } from "react";
import Overlay from "../pages/Overlay";
import "../styles/AddNew.css";
import useStore from "../useStore";
import { useParams, useRouter } from "next/navigation";

export default function EditBoard({ editBoard, setEditBoard }: any) {
  const { boards, setBoards, columns, setColumns, darkmode }: any = useStore();
  const params = useParams<any>();
  const [boardName, setBoardName] = useState<any>(params.main);
  const [boardColumns, setBoardColumns] = useState(columns[0]);
  const [newColumnName, setNewColumnName] = useState("");

  const router = useRouter();

  const handleColumnChange = (index: number, columnName: string) => {
    const updatedColumns = [...boardColumns];
    updatedColumns[index].name = columnName;
    setBoardColumns(updatedColumns);
  };

  const handleAddColumn = () => {
    const newColumn = { name: newColumnName };
    setBoardColumns([...boardColumns, newColumn]);
    setNewColumnName(""); // Clear the input field after adding the column
  };

  const submit = () => {
    const updatedBoards = boards.map((board: any) => {
      if (board.name.replace(" ", "-") === params.main) {
        return { ...board, name: boardName, columns: boardColumns };
      }
      return board;
    });
    setBoards(updatedBoards);
    setEditBoard(false);
    router.push(`/${boardName}`);
  };

  return (
    <>
      <Overlay isOpen={editBoard} onClose={() => setEditBoard(false)} />
      <div
        className="addnew__container absolute bg-white p-6 rounded-md "
        style={{ backgroundColor: darkmode ? "#2B2C37" : "" }}
      >
        <h1
          className="text-black font-sans font-semibold text-lg pb-6"
          style={{ color: darkmode ? "#fff" : "" }}
        >
          Edit Board
        </h1>
        <div>
          <div>
            <h3
              className="text-gray-500 font-semibold pb-2 "
              style={{ color: darkmode ? "#fff" : "" }}
            >
              Board Name
            </h3>
            <input
              value={boardName}
              className="p-2 text-[14px] w-full border border-gray-300 rounded-md  bg-transparent"
              type="text"
              onChange={(e) => setBoardName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h3
            className="text-gray-500 font-semibold pt-4 pb-2"
            style={{ color: darkmode ? "#fff" : "" }}
          >
            Board Columns
          </h3>
          {boardColumns.map((column: any, index: number) => (
            <input
              key={index}
              value={column.name}
              onChange={(e) => handleColumnChange(index, e.target.value)}
              className="p-2 mt-2 mb-2 text-[14px] w-full border border-gray-300 rounded-md bg-transparent"
            />
          ))}
          {/* Input field for adding a new column */}
          <input
            value={newColumnName}
            onChange={(e) => setNewColumnName(e.target.value)}
            className="p-2 mt-2 mb-2 text-[14px] w-full border border-gray-300 rounded-md bg-transparent"
            placeholder="New Column Name"
          />
          {/* Button to add a new column */}
          <button
            onClick={handleAddColumn}
            className="w-full h-10 mt-3 mb-5 rounded-full bg-opacity-10 bg-purple-400 text-purple-600 text-center text-sm font-semibold leading-5"
          >
            Add New Column
          </button>
        </div>
        <button
          className="h-[40px] w-full rounded-[40px] mt-6 bg-indigo-600 text-white text-center font-bold text-base leading-6"
          onClick={submit}
        >
          Save Changes
        </button>
      </div>
    </>
  );
}
