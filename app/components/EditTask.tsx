import { useState, useEffect } from "react";
import Overlay from "../pages/Overlay";
import "../styles/AddNew.css";
import useStore from "../useStore";
import { useParams } from "next/navigation";

export default function EditTask({ editTask, setEditTask }: any) {
  const {
    clicked,
    updateTask,
    boards,
    setboards,
    view,
    setView,
    darkmode,
  }: any = useStore();
  const params = useParams();
  const [title, setTitle] = useState<any>(clicked.title);
  const [description, setDescription] = useState<any>(clicked.description);
  const [status, setStatus] = useState<any>(clicked.status);

  const checkForMatch = () => {
    boards.forEach((board: any) => {
      if (board.name.replace(" ", "-") === params.main) {
        board.columns.forEach((column: any) => {
          column.tasks.forEach((task: any) => {
            if (task.title === clicked.title) {
              task.title = title;
              task.description = description;
              task.status = status;
            }
          });
        });
      }
    });
    setEditTask(false);
    setView(false);
    setView(true);
  };

  return (
    <>
      <Overlay isOpen={editTask} onClose={() => setEditTask(false)} />

      <div
        className="addnew__container absolute bg-white p-6 rounded-md"
        style={{ backgroundColor: darkmode ? "#2B2C37" : "" }}
      >
        <h1
          className="text-black font-sans font-semibold text-lg pb-6"
          style={{ color: darkmode ? "#fff" : "" }}
        >
          Edit Task
        </h1>
        <div>
          <div>
            <h3
              className="text-gray-500 font-semibold pb-2"
              style={{ color: darkmode ? "#fff" : "" }}
            >
              Title
            </h3>
            <input
              className="p-2 text-[14px] w-full border border-gray-300 rounded-md  bg-transparent"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h3
              className="text-gray-500 font-semibold pb-2 pt-4"
              style={{ color: darkmode ? "#fff" : "" }}
            >
              Description
            </h3>
            <textarea
              className="addnew__description text-[14px] bg-transparent p-2 resize-y border border-gray-300 rounded-md w-full min-h-[150px]"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <h3
              className="text-gray-500 font-semibold pt-4 pb-2"
              style={{ color: darkmode ? "#fff" : "" }}
            >
              Status
            </h3>
            <select
              className="w-full h-12 border border-gray-300 rounded-md p-2 bg-transparent text-[14px]"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option
                value="Todo"
                style={{ backgroundColor: darkmode ? "#2B2C37" : "" }}
              >
                Todo
              </option>
              <option
                value="Doing"
                style={{ backgroundColor: darkmode ? "#2B2C37" : "" }}
              >
                Doing
              </option>
              <option
                value="Done"
                style={{ backgroundColor: darkmode ? "#2B2C37" : "" }}
              >
                Done
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="h-[40px] w-full rounded-[40px] mt-6 bg-indigo-600 text-white text-center font-bold text-base leading-6"
            onClick={checkForMatch}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
