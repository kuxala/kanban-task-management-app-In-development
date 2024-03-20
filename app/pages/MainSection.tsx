"use client";
import { useContext, useState } from "react";
import "../styles/MainSection.css";
import { AppContext } from "../page";
import View from "../components/View";
import useStore from "../useStore";

export default function MainSection() {
  const [isEmpty, setIsEmpty] = useState(false);
  const { data, setData }: any = useContext(AppContext);

  // data.boards.forEach((board: any) => {
  //   board.columns.forEach((column: any) => {
  //     column.tasks.forEach((task: any) => {
  //       console.log(task.title);
  //       console.log(task.description);
  //     });
  //   });
  // });
  const {
    view,
    setView,
    addNew,
    setAddNew,
    dots,
    setDots,
    setEditTask,
    setEditBoard,
    menu,
    setMenu,
  }: any = useStore();
  return (
    <>
      <div className="w-screen flex ">
        {isEmpty ? (
          <div className="section__addnew">
            <p className="section__text">
              This board is empty. Create a new column to get started
            </p>
            <button
              className="section__addnew__button"
              onClick={() => {
                setIsEmpty(false);
              }}
            >
              + Create New Column
            </button>
          </div>
        ) : (
          <div className="section__both">
            <div className="section__rows ">
              <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
                TODO
              </h3>

              <div
                className="section__div"
                onClick={() => {
                  setView(true);
                }}
              >
                {data.boards.map((board: any) => {
                  return (
                    <>
                      <h1 className="section__description">{board.name}</h1>
                      <h3 className="section__subtask">{board.description}</h3>
                    </>
                  );
                })}
                <div></div>
              </div>
            </div>
            {/* {edit ? <EditTask /> : null} */}
            {/* <div className="section-columns">
              <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
                Doing
              </h3>
              <div className="section__div">
                <h1 className="section__description">text descriptipon</h1>
                <h3 className="section__subtask">Subtasks</h3>
              </div>
            </div>
            <div className="section-columns">
              <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
                Doing
              </h3>
              <div className="section__div">
                <h1 className="section__description">text descriptipon</h1>
                <h3 className="section__subtask">Subtasks</h3>
              </div>
            </div> */}
          </div>
        )}
        {view ? <View /> : null}
      </div>
    </>
  );
}
