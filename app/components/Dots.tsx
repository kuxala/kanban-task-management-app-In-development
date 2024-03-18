import { useContext } from "react";
import { AppContext } from "../page";
import EditTask from "../pages/EditTask";
import Delete from "./Delete";

export default function Dots() {
  const { edit, setEdit }: any = useContext(AppContext);
  const { deleteTask, setDeleteTask }: any = useContext(AppContext);
  return (
    <>
      <div className="absolute top-20 right-5 p-4 bg-white w-48 h-24 flex flex-col rounded-lg ">
        <p
          className="pb-2 text-gray-600 font-medium text-base leading-6"
          onClick={() => {
            setEdit(!edit);
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
        {edit ? <EditTask /> : null}
        {deleteTask ? <Delete /> : null}
      </div>
    </>
  );
}
