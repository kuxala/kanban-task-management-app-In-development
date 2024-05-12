import { useParams } from "next/navigation";
import useStore from "../useStore";
import View from "./View";
import React from "react";

export default function Column({ taskname }: any) {
  const { view, setView, setClicked, darkmode, boards, columns }: any =
    useStore();
  const params = useParams<any>();
  // console.log("Params: ", params.main);
  // console.log("TaskName: ", taskname);
  const filteredBoard = boards.find((board: any) => {
    return board?.name?.replace(" ", "-") == params.main;
  });
  // console.log("filterBoard: ", filteredBoard);

  return (
    <>
      <div className="min-w-56 mt-28 ">
        <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
          {taskname}
        </h3>

        <div>
          {filteredBoard?.columns?.map((column: any) => (
            <div key={column.name}>
              {column?.tasks?.map((task: any) => {
                if (task.status === taskname) {
                  return (
                    <div
                      key={task.title}
                      className="section__div"
                      onClick={() => {
                        setView(true);
                        setClicked(task);
                      }}
                    >
                      <div className="flex flex-col ">
                        <p
                          className="text-black font-bold text-base pb-1 hover:text-[#635fc7] transition-all duration-200 ease-in-out"
                          style={{ color: darkmode ? "#fff" : "" }}
                        >
                          {task.title}
                        </p>
                        <p className="text-gray-600 font-bold text-xs ">
                          {task.subtasks.length} Subtasks
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
