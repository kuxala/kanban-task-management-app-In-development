import { useContext, useState } from "react";
import Overlay from "../pages/Overlay";
import "../styles/View.css";
// import Dots from "./Dots";
import EditBoard from "./EditBoard";
import DeleteBoard from "./DeleteBoard";
import useStore from "../useStore";
import { useParams } from "next/navigation";
import EditTask from "./EditTask";
import ViewDots from "./ViewDots";
import DeleteTask from "./DeleteTask";

export default function View() {
  const {
    data,
    setData,
    view,
    setView,
    clicked,
    setClicked,
    darkmode,
    boards,
  }: any = useStore();
  const params = useParams<{ tag: string; item: string; main: string }>();
  const [dots, setDots] = useState(false);
  const [status, setStatus] = useState<any>(clicked.status);

  const handleChange =
    (taskIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedSubtasks = [...clicked.subtasks];
      updatedSubtasks[taskIndex].isCompleted = event.target.checked;

      setData({ ...data, clicked: { ...clicked, subtasks: updatedSubtasks } }); // Example update
    };
  const checkForMatch = () => {
    boards.forEach((board: any) => {
      if (board.name.replace(" ", "-") === params.main) {
        board.columns.forEach((column: any) => {
          column.tasks.forEach((task: any) => {
            if (task.title === clicked.title) {
              return (task.status = status);
            }
          });
        });
      }
    });
  };

  return (
    <>
      <Overlay isOpen={view} onClose={() => setView(false)} />
      <div
        className="fixed top-0 md:top-[20%] md:left-1/2 md:-translate-x-1/2 rounded-[8px] left-0 right-0 bg-white m-6 p-6 z-50 md:w-[500px]"
        style={{ backgroundColor: darkmode ? "#2B2C37" : "#fff" }}
      >
        <div>
          <div className="flex justify-between items-center gap-4 pb-4">
            <h1 className=" text-black-900 font-bold text-lg font-feature-settings">
              {clicked.title}
            </h1>
            <img
              src="/assets/icon-vertical-ellipsis.svg"
              className="h-full cursor-pointer"
              onClick={() => setDots(!dots)}
            />
          </div>
          <div>{dots ? <ViewDots /> : null}</div>
          <p className="pb-6 text-gray-500 font-medium text-base leading-6 font-feature-settings">
            {clicked.description}
          </p>
          <div>
            <h3 className="pb-4 text-gray-500 font-bold text-xs leading-normal">
              Subtask(s)
            </h3>
            <ul>
              {clicked?.subtasks?.map((tasks: any, index: any) => {
                return (
                  <li
                    className="flex gap-2 items-center bg-[#F4F7FD] mt-2 p-2 rounded"
                    style={{
                      backgroundColor: darkmode ? "#20212C" : "",
                    }}
                    key={index}
                  >
                    <input
                      type="checkbox"
                      className="
                        peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm mt-1 bg-white
                        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
                        checked:bg-blue-500 checked:border-0
                        disabled:border-steel-400 disabled:bg-steel-400
                      "
                      // value={tasks.isCompleted}
                      checked={tasks.isCompleted}
                      onChange={handleChange(index)}
                    />
                    <span
                      style={{
                        textDecoration: tasks.isCompleted
                          ? "line-through"
                          : "none",
                        color: darkmode ? "#fff" : "",
                      }}
                      className="text-[#000112] text-xs font-[700] opacity-60"
                    >
                      {tasks.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="pt-6 pb-2 text-gray-500 font-bold text-xs leading-normal">
              Current Status
            </h3>
            <select
              className="w-full h-12 border border-gray-300 rounded-md p-2 bg-transparent"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              onClick={checkForMatch}
            >
              {boards.map((board: any, boardIndex: number) => {
                if (board.name.replace(" ", "-") === params.main) {
                  return board.columns.map(
                    (column: any, columnIndex: number) => (
                      <option
                        key={`board-${boardIndex}-column-${columnIndex}`}
                        value={column.name}
                        style={{
                          color: darkmode ? "#fff" : "black",
                          backgroundColor: darkmode ? "#20212C" : "#fff",
                        }}
                      >
                        {column.name}
                      </option>
                    )
                  );
                }
                return null;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
