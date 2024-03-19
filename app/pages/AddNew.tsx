// AddNew.js
import { useContext, useState } from "react";
import Overlay from "./Overlay"; // Import Overlay component
import "../styles/AddNew.css";
import { AppContext } from "../page";
import { useForm } from "react-hook-form";

export default function AddNew() {
  const { addNew, setAddNew }: any = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { subtasks, setSubtasks }: any = useContext(AppContext);

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, ""]);
  };

  const handleDeleteSubtask = (indexToDelete: number) => {
    setSubtasks(
      subtasks.filter(
        (unusedParam: any, index: number) => index !== indexToDelete
      )
    );
  };

  return (
    <>
      <Overlay isOpen={addNew} onClose={() => setAddNew(false)} />
      {addNew && (
        <div className="addnew__container absolute bg-white p-6 rounded-md ">
          <h1 className="text-black font-sans font-semibold text-lg pb-6">
            Add New Task
          </h1>
          <div>
            <div>
              <h3 className="text-gray-500 font-semibold pb-2 ">Title</h3>
              <input
                placeholder="e.g. Take coffee break"
                className="p-2 text-[14px] w-full border border-gray-300 rounded-md  bg-white"
              />
            </div>
            <div>
              <h3 className="text-gray-500 font-semibold pb-2 pt-4">
                Description
              </h3>
              <textarea
                className="addnew__description text-[14px] p-2 resize-y border border-gray-300 rounded-md w-full min-h-[150px]"
                placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
              ></textarea>
            </div>
            <div>
              <h3 className="text-gray-500 font-semibold pt-4 pb-2">
                SubTasks
              </h3>
              {subtasks.map((subtask: any, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    className="p-2 mt-1 mb-1 text-[14px] w-full border border-gray-300 rounded-md  bg-white "
                    placeholder="e.g. Make coffee"
                    {...register(`subtasks[${index}]`)}
                  />
                  <img
                    src="/assets/icon-cross.svg"
                    onClick={() => handleDeleteSubtask(index)}
                  />
                </div>
              ))}
              <button
                onClick={handleAddSubtask}
                className="w-full h-10 mt-3 mb-5 rounded-full bg-opacity-10 bg-purple-400 text-purple-600 text-center text-sm font-semibold leading-5"
              >
                Add New Subtask
              </button>
            </div>
            <div>
              <h3 className="text-gray-500 font-semibold pb-2 ">Status</h3>
              <select className="w-full h-12 border border-gray-300 rounded-md p-2 bg-white">
                <option value="1">Todo</option>
                <option value="2">Doing</option>
                <option value="2">Done</option>
              </select>
            </div>
            <button className=" h-[40px] w-full rounded-[40px] mt-6 bg-indigo-600 text-white text-center font-bold text-base leading-6">
              Add New Task
            </button>
          </div>
        </div>
      )}
    </>
  );
}
