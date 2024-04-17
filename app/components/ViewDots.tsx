import { useContext, useState } from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import EditBoard from "./EditBoard";
import DeleteBoard from "./DeleteBoard";
import useStore from "../useStore";

export default function ViewDots() {
  const { darkmode }: any = useStore();
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  return (
    <>
      <div
        className="absolute top-15 right-5 p-4 bg-slate-50 w-48 h-24 flex flex-col rounded-lg "
        style={{ backgroundColor: darkmode ? "#383947" : "" }}
      >
        <p
          className="pb-2 text-gray-600 font-medium text-base leading-6 cursor-pointer"
          style={{ color: darkmode ? "#fff" : "" }}
          onClick={() => {
            setEditTask(!editTask);
          }}
        >
          Edit Task
        </p>
        <p
          className="text-red-500 font-medium text-base leading-6 font-feature-settings cursor-pointer"
          onClick={() => {
            setDeleteTask(!deleteTask);
          }}
        >
          Delete Task
        </p>
      </div>
      <div className="md:relative md:bottom-40">
        {editTask ? (
          <EditTask editTask={editTask} setEditTask={setEditTask} />
        ) : null}
      </div>
      <div className=" ">
        {deleteTask ? (
          <DeleteTask deleteTask={deleteTask} setDeleteTask={setDeleteTask} />
        ) : null}
      </div>
    </>
  );
}
