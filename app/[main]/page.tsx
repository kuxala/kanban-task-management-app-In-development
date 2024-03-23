"use client";
import MainSection from "../pages/MainSection";
import { useParams } from "next/navigation";
import useStore from "../useStore";
import View from "../components/View";

type Params = {
  main: string;
};

export default function Main() {
  const params = useParams<Params>();
  const { data, view, setView, tasks, boards, setBoards }: any = useStore();

  console.log(data);
  return (
    <>
      <div className="section__both">
        <div className="section__columns">
          <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
            Todo
          </h3>

          <div className="section__div " onClick={() => setView(true)}>
            <div className="flex flex-col">
              <p className="text-black font-bold text-base pb-1p"></p>
              <p className="text-gray-600 font-bold text-xs">Subtasks</p>
            </div>
            {/* {task.todo && (
                  <ul>
                    {task.todo.map((subtask: any, subIndex: number) => (
                      <li key={subIndex}>{subtask.title}</li>
                    ))}
                  </ul>
                )} */}
          </div>

          {/* <div
            className="section__div"
            onClick={() => {
              setView(true);
            }}
          >
            <h1 className="section__description">Description</h1>
          </div> */}
        </div>
      </div>
      <div>{view ? <View /> : null}</div>
      <MainSection />
    </>
  );
}
