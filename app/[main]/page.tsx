"use client";
import React, { useContext } from "react";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";
import MainSection from "../pages/MainSection";
import { useParams } from "next/navigation";

type Params = {
  tag: string;
  item: string;
  main: string;
};
export default function Main() {
  const params = useParams<Params>();

  return (
    <>
      <div className="flex">
        <h1>we are on {params.main}</h1>
        {/* <Sidebar />
        <MainSection /> */}
      </div>
    </>
  );
}
