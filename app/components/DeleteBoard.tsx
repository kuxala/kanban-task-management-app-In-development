import { useContext } from "react";
import Overlay from "../pages/Overlay";
import useStore from "../useStore";

export default function DeleteBoard() {
  const { addNew, setAddNew, dots, setEditBoard, setDeleteBoard }: any =
    useStore();
  return (
    <>
      <Overlay
        isOpen={dots.deleteBoard}
        onClose={() => setDeleteBoard(false)}
      />
      <div className="absolute md:max-w-[500px] md:top-[30%] md:left-1/2 md:-translate-x-1/2 top-20 left-0 bg-white flex flex-col ml-8 mr-8 p-6 z-50 rounded-[8px] ">
        <h1 className="pb-6 text-red-500 font-bold text-xl font-feature-settings">
          Delete Board?
        </h1>
        <p className="text-gray-500 font-medium text-base leading-6 font-feature-settings">
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="flex flex-col gap-4 pt-6 md:flex-row">
          <button className="w-full h-10 rounded-[20px] bg-red-500  text-white text-center font-bold text-base leading-6">
            Delete
          </button>
          <button
            className="w-full h-10 rounded-[20px] bg-purple-200 text-purple-700 text-center font-bold text-base leading-6"
            onClick={() => {
              setDeleteBoard(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
