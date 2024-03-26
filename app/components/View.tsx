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
  const { data, setData, view, setView }: any = useStore();
  const params = useParams<{ tag: string; item: string; main: string }>();
  const [dots, setDots] = useState(false);

  // console.log("Params: ", params.main);

  // const loop = () => {
  //   data.boards.forEach((board: any) => {
  //     console.log("Board:", board.name);
  //     board.columns.forEach((column: any) => {
  //       console.log("Column:", column.name);
  //       column.tasks.forEach((task: any) => {
  //         console.log("Task:", task.name);
  //         task.subTasks.forEach((subTask: any) => {
  //           console.log("SubTask:", subTask.name);
  //         });
  //       });
  //     });
  //   });
  // };
  // loop();

  return (
    <>
      <Overlay isOpen={view} onClose={() => setView(false)} />
      <div className="fixed top-0 md:top-[20%] md:left-1/2 md:-translate-x-1/2 rounded-[8px] left-0 right-0 bg-white m-6 p-6 z-50 md:w-[500px]">
        <div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="pb-6 text-black-900 font-bold text-lg font-feature-settings">
              sasdasd
            </h1>
            <img
              src="/assets/icon-vertical-ellipsis.svg"
              className="h-full"
              onClick={() => setDots(!dots)}
            />
          </div>
          <div>{dots ? <ViewDots /> : null}</div>
          <p className="pb-6 text-gray-500 font-medium text-base leading-6 font-feature-settings">
            {/* Render the description */}
          </p>
          <div>
            <h3 className="pb-4 text-gray-500 font-bold text-xs leading-normal">
              Subtask(s)
            </h3>
            {/* Render subtasks if they exist */}

            <ul>
              <li></li>
            </ul>
          </div>
          <div>
            <h3 className="pt-6 pb-2 text-gray-500 font-bold text-xs leading-normal">
              Current Status
            </h3>
            <select className="w-full h-12 border border-gray-300 rounded-md p-2 bg-white">
              <option value="1">Todo</option>
              <option value="2">Doing</option>
              <option value="2">Done</option>
            </select>
          </div>
        </div>
      </div>

      {/* <div>{editTask ? <EditTask /> : null}</div> */}
    </>
  );
}
