"use client";
import MainSection from "../pages/MainSection";
import { useParams } from "next/navigation";
import useStore from "../useStore";
import View from "../components/View";
import { use, useState } from "react";
import Column from "../components/Column";
import Rows from "../components/Rows";

type Params = {
  main: string;
  data: string;
};

export default function Main() {
  const params = useParams<Params>();
  const { data, view, setView }: any = useStore();

  // console.log("Boards ", data.boards[0]);
  // console.log("Columns", data.boards[0].columns);

  return (
    <>
      <div className="section__both">
        <Rows />
      </div>
      <div>{view ? <View /> : null}</div>
      <MainSection />
    </>
  );
}
