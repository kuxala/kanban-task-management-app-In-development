import { useContext, useState } from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import EditBoard from "./EditBoard";
import DeleteBoard from "./DeleteBoard";
import useStore from "../useStore";

export default function EditDots({ name }: any) {
  const {
    addNew,
    setAddNew,
    dots,
    setEditTask,
    deleteBoard,
    deleteTask,
    setDeleteBoard,
    setDeleteTask,
  }: any = useStore();
  return (
    <>
      <div className="absolute top-20 right-5 p-4 bg-white w-48 h-24 flex flex-col rounded-lg ">
        <p
          className="pb-2 text-gray-600 font-medium text-base leading-6"
          onClick={() => {
            setEditTask(!dots.editTask);
          }}
        >
          Edit {name}
        </p>
        <p
          className="text-red-500 font-medium text-base leading-6 font-feature-settings"
          onClick={() => {
            setDeleteBoard(!deleteBoard);
          }}
        >
          Delete {name}
        </p>
      </div>
      <div>
        {dots.deleteBoard ? <DeleteBoard /> : null}
        {dots.editTask ? <EditTask /> : null}
      </div>
    </>
  );
}
