import { useContext, useState } from "react";
import Overlay from "./Overlay"; // Import Overlay component
import "../styles/AddNew.css";
import useStore from "../useStore";
import { useParams } from "next/navigation";

export default function AddNew() {
  const {
    data,
    addNew,
    setAddNew,
    newTaskTitle,
    setNewTaskTitle,
    newTaskDescription,
    setNewTaskDescription,
    newTaskSubtasks,
    setNewTaskSubtasks,
    newTaskStatus,
    setNewTaskStatus,
    setData,
    newSubtaskTitle,
    newSubtasks,
    setNewSubtasks,
    setNewSubtaskTitle,
  }: any = useStore();
  const params = useParams();
  // console.log(params.main);

  // console.log(data.boards);

  const handleAddNewSubtask = () => {
    if (newSubtaskTitle.trim() === "") {
      return;
    }

    const newSubtask = {
      title: newSubtaskTitle.trim(),
      isCompleted: false,
    };

    setNewTaskSubtasks([...newTaskSubtasks, newSubtask]);
    setNewSubtaskTitle("");
  };

  const handleAddNewTask = () => {
    const newTask = {
      title: newTaskTitle,
      description: newTaskDescription,
      status: newTaskStatus,
      subtasks: newTaskSubtasks,
    };

    const boardIndex = data.boards.findIndex((board: any) => {
      // console.log("Boards:", board.name.replace(" ", "-"));
      // console.log(params.main);
      return board.name.replace(" ", "-") === params.main;
    });

    if (boardIndex !== -1) {
      const columnIndex = data.boards[boardIndex].columns.findIndex(
        (column: any) => column.name === newTaskStatus
      );

      if (columnIndex !== -1) {
        const updatedData = { ...data };
        updatedData.boards[boardIndex].columns[columnIndex].tasks.push(newTask);
        setData(updatedData);
      } else {
        console.error("Column not found for status:", newTaskStatus);
      }
    } else {
      console.error("Board not found:", params.main);
    }

    // Reset input values and close the form as before
    setNewTaskTitle("");
    setNewTaskDescription("");
    setNewTaskSubtasks([]);
    setNewTaskStatus("Todo");
    setAddNew(false);
  };
  console.log(newTaskStatus);
  // console.log(data);
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
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
            </div>
            <div>
              <h3 className="text-gray-500 font-semibold pb-2 pt-4">
                Description
              </h3>
              <textarea
                className="addnew__description text-[14px] p-2 resize-y border border-gray-300 rounded-md w-full min-h-[150px]"
                placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <h3 className="text-gray-500 font-semibold pt-4 pb-2">
                SubTasks
              </h3>
              {newSubtasks.map((subtask: any, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    className="p-2 mt-1 mb-1 text-[14px] w-full border border-gray-300 rounded-md bg-white"
                    value={subtask.title}
                    readOnly
                  />
                  <img
                    src="/assets/icon-cross.svg"
                    alt="Remove subtask"
                    onClick={() => {
                      const updatedSubtasks = [...newSubtasks];
                      updatedSubtasks.splice(index, 1);
                      setNewSubtasks(updatedSubtasks);
                    }}
                  />
                </div>
              ))}
              <input
                placeholder="Add a subtask"
                className="p-2 w-full border border-gray-300 rounded-md bg-white"
                value={newSubtaskTitle}
                onChange={(e) => setNewSubtaskTitle(e.target.value)}
              />
              <button
                className="w-full h-10 mt-3 mb-5 rounded-full bg-opacity-10 bg-purple-400 text-purple-600 text-center text-sm font-semibold leading-5"
                type="button"
                onClick={handleAddNewSubtask}
              >
                Add New Subtask
              </button>
            </div>
            <div>
              <h3 className="text-gray-500 font-semibold pb-2 ">Status</h3>
              <select
                className="w-full h-12 border border-gray-300 rounded-md p-2 bg-white"
                onChange={(e) => setNewTaskStatus(e.target.value)}
              >
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <button
              className=" h-[40px] w-full rounded-[40px] mt-6 bg-indigo-600 text-white text-center font-bold text-base leading-6"
              onClick={handleAddNewTask}
              type="submit"
            >
              Add New Task
            </button>
          </div>
        </div>
      )}
    </>
  );
}
