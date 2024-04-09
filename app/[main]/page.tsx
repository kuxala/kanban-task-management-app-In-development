"use client";
import useStore from "../useStore";
import View from "../components/View";
import Rows from "../components/Rows";
import MainSection from "../pages/Empty";
import "../styles/MainSection.css";

export default function Main({ params }: any) {
  const { data, setData, view, setView, isOpen, boards }: any = useStore();
  // console.log("Boards ", data.boards[0]);
  // console.log("Columns", data.boards[0].columns);
  // console.log(isOpen);
  // console.log("Data Boards ", boards);

  return (
    <>
      <div className="section__both">
        <Rows />
      </div>
      <div>{view ? <View /> : null}</div>
    </>
  );
}
