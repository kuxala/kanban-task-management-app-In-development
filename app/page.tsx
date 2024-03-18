"use client";
import React, { useState } from "react";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import MainSection from "./pages/MainSection";

export const AppContext = React.createContext({});

export default function Home() {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [activeField, setActiveField] = useState("main");
  const [boards, setBoards] = useState(["First one", "Second one"]);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState<number | null>(
    null
  );
  const [addNew, setAddNew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [subtasks, setSubtasks] = useState([""]);
  const [dots, setDots] = useState(false);
  return (
    <>
      <AppContext.Provider
        value={{
          darkmode,
          setDarkmode,
          sidebar,
          setSidebar,
          isOpen,
          setIsOpen,
          menu,
          setMenu,
          activeField,
          setActiveField,
          boards,
          setBoards,
          selectedBoardIndex,
          setSelectedBoardIndex,
          addNew,
          setAddNew,
          edit,
          setEdit,
          subtasks,
          setSubtasks,
          dots,
          setDots,
        }}
      >
        <Header />

        <div className="flex">
          <Sidebar />
          <MainSection />
        </div>
      </AppContext.Provider>
    </>
  );
}
