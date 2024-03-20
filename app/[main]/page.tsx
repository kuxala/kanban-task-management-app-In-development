"use client";
import React, { useContext } from "react";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";
import MainSection from "../pages/MainSection";
import { AppContext } from "../page";

export default function Main() {
  const { sidebar, view }: any = useContext(AppContext);
  return (
    <>
      <div className="flex">
        <h1>Individual page</h1>
        {/* <Sidebar />
        <MainSection /> */}
      </div>
    </>
  );
}
