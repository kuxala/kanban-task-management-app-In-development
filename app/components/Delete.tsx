import { useContext } from "react";
import { AppContext } from "../page";

export default function Delete() {
  const { deleteTask, setDeleteTask }: any = useContext(AppContext);
  return (
    <>
      <div className="absolute top-20 left-0 bg-white flex flex-col ml-8 mr-8 p-6">
        <h1 className="pb-6 text-red-500 font-bold text-xl font-feature-settings">
          Delete Board?
        </h1>
        <p className="text-gray-500 font-medium text-base leading-6 font-feature-settings">
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed./
        </p>

        <div className="flex flex-col gap-4 pt-6">
          <button className="w-full h-10 rounded-[20px] bg-red-500  text-white text-center font-bold text-base leading-6">
            Delete
          </button>
          <button
            className="w-full h-10 rounded-[20px] bg-purple-200 text-purple-700 text-center font-bold text-base leading-6"
            onClick={() => {
              setDeleteTask(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
