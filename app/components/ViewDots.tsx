import { useContext, useState } from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import EditBoard from "./EditBoard";
import DeleteBoard from "./DeleteBoard";

export default function ViewDots({ name, board, edit }: any) {
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  return (
    <>
      <div className="absolute top-15 right-5 p-4 bg-slate-50 w-48 h-24 flex flex-col rounded-lg ">
        <p
          className="pb-2 text-gray-600 font-medium text-base leading-6"
          onClick={() => {
            setEditTask(!editTask);
          }}
        >
          Edit Task
        </p>
        <p
          className="text-red-500 font-medium text-base leading-6 font-feature-settings"
          onClick={() => {
            setDeleteTask(!deleteTask);
          }}
        >
          Delete Task
        </p>
      </div>
      <div>
        {editTask ? (
          <EditTask editTask={editTask} setEditTask={setEditTask} />
        ) : null}
      </div>
      <div>
        {deleteTask ? (
          <DeleteTask deleteTask={deleteTask} setDeleteTask={setDeleteTask} />
        ) : null}
      </div>
    </>
  );
}
