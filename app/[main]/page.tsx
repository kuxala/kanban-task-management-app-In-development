"use client";
import MainSection from "../pages/MainSection";
import { useParams } from "next/navigation";
import useStore from "../useStore";
import View from "../components/View";
import { use, useState } from "react";

type Params = {
  main: string;
  data: string;
};

export default function Main() {
  const params = useParams<Params>();
  const { data, view, setView }: any = useStore();

  console.log("Boards ", data.boards[0]);
  console.log("Columns", data.boards[0].columns);
  return (
    <>
      <div className="section__both">
        <div className="section__columns">
          <h3 className="ml-4 mt-4 text-gray-500 font-sans font-semibold text-xs normal-case tracking-wider">
            Todo
          </h3>

          <div className="section__div " onClick={() => setView(true)}>
            <div className="flex flex-col">
              <p className="text-black font-bold text-base pb-1p">{}</p>
              <p className="text-gray-600 font-bold text-xs">Subtasks</p>
            </div>
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
