import { useContext } from "react";
import { AppContext } from "../page";
import EditTask from "../pages/EditTask";
import Delete from "./Delete";
import Overlay from "../pages/Overlay";

export default function Dots() {
  const { edit, setEdit }: any = useContext(AppContext);
  const { deleteTask, setDeleteTask }: any = useContext(AppContext);
  const { dots, setDots }: any = useContext(AppContext);
  return (
    <>
      <Overlay isOpen={dots} onClose={() => setDots(false)} />
      <>
        <div className="absolute top-20 right-5 p-4 bg-white w-48 h-24 flex flex-col rounded-lg z-30">
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
    </>
  );
}
