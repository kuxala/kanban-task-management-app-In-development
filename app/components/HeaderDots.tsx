import { useContext, useState } from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import EditBoard from "./EditBoard";
import DeleteBoard from "./DeleteBoard";
import useStore from "../useStore";
import { set } from "react-hook-form";

export default function BoardDots({ name, board, edit }: any) {
  const [editBoard, setEditBoard] = useState(false);
  const [deleteBoard, setDeleteBoard] = useState(false);

  return (
    <>
      <div className="absolute top-20 right-5 p-4 bg-white w-48 h-24 flex flex-col rounded-lg ">
        <p
          className="pb-2 text-gray-600 font-medium text-base leading-6 cursor-pointer"
          onClick={() => {
            setEditBoard(!editBoard);
          }}
        >
          Edit Board
        </p>
        <p
          className="text-red-500 font-medium text-base leading-6 font-feature-settings cursor-pointer"
          onClick={() => {
            setDeleteBoard(!deleteBoard);
          }}
        >
          Delete Board
        </p>
      </div>
      <div>
        {editBoard ? (
          <EditBoard editBoard={editBoard} setEditBoard={setEditBoard} />
        ) : null}
        {deleteBoard ? (
          <DeleteBoard
            deleteBoard={deleteBoard}
            setDeleteBoard={setDeleteBoard}
          />
        ) : null}
      </div>
    </>
  );
}
