"use client";
import { useParams } from "next/navigation";
import useStore from "../useStore";
import View from "../components/View";
import { use, useState } from "react";
import Rows from "../components/Rows";
import MainSection from "../pages/MainSection";

type Params = {
  main: string;
  data: string;
};

export default function Main() {
  const params = useParams<Params>();
  const { data, view, setView, isOpen }: any = useStore();

  // console.log("Boards ", data.boards[0]);
  // console.log("Columns", data.boards[0].columns);
  // console.log(isOpen);
  // console.log("Data Boards ", data.boards);

  return (
    <>
      <div className="section__both">
        <Rows />
      </div>
      <div>{view ? <View /> : null}</div>
      {isOpen ? <MainSection /> : null}
    </>
  );
}
