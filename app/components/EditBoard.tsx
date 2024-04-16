import { useState } from "react";
import Overlay from "../pages/Overlay";
import "../styles/AddNew.css";
import useStore from "../useStore";
import { useParams, useRouter } from "next/navigation";

export default function EditBoard({ editBoard, setEditBoard }: any) {
  const { boards, setBoards, clicked, columns }: any = useStore();
  const params = useParams<any>();
  const [boardName, setBoardName] = useState<any>(params.main);
  const [boardColumns, setBoardColums] = useState();

  const submit = () => {
    const updatedBoards = boards.map((board: any) => {
      if (board.name.replace(" ", "-") === params.main) {
        // Update the name of the matching board
        return { ...board, name: boardName };
      }
      return board;
    });
    setBoards(updatedBoards);
    setEditBoard(false);
  };
  console.log(boards);
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
              value={boardName}
              className="p-2 text-[14px] w-full border border-gray-300 rounded-md  bg-white"
              type="text"
              onChange={(e) => setBoardName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h3 className="text-gray-500 font-semibold pt-4 pb-2">
            Board Columns
          </h3>

          <input
            className="p-2 mt-2 mb-2 text-[14px] w-full border border-gray-300 rounded-md bg-white"
            required
          />
          <button className="w-full h-10 mt-3 mb-5 rounded-full bg-opacity-10 bg-purple-400 text-purple-600 text-center text-sm font-semibold leading-5">
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
