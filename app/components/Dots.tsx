import { useContext, useState } from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import EditBoard from "./EditBoard";
import DeleteBoard from "./DeleteBoard";

export default function EditDots({ name }: any) {
  return (
    <>
      <div className="absolute top-20 right-5 p-4 bg-white w-48 h-24 flex flex-col rounded-lg ">
        <p
          className="pb-2 text-gray-600 font-medium text-base leading-6"
          onClick={() => {
            // setEdit(!edit);
          }}
        >
          Edit {name}
        </p>
        <p
          className="text-red-500 font-medium text-base leading-6 font-feature-settings"
          onClick={() => {
            // setDeleteTask(!deleteTask);
          }}
        >
          Delete {name}
        </p>
      </div>
      <div>
        {/* {edit ? <EditBoard /> : null}
        {deleteTask ? <DeleteBoard /> : null} */}
      </div>
    </>
  );
}
