"use client";
import React, { useState } from "react";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import MainSection from "./pages/MainSection";
import { useForm } from "react-hook-form";
import jsonData from "../public/data.json";
import { useParams } from "next/navigation";
import Main from "./[main]/page";

export const AppContext = React.createContext({});

export default function Home() {
  const [data, setData] = useState(jsonData);
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const [addNew, setAddNew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [subtasks, setSubtasks] = useState([""]);
  const [view, setView] = useState(false);
  const [checkboxes, setCheckboxes] = useState([{ id: 0, isChecked: false }]);

  const [dots, setDots] = useState<boolean[]>([false, false]);

  const { register, handleSubmit } = useForm();
  const params = useParams<{ tag: string; item: string }>();

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
          addNew,
          setAddNew,
          edit,
          setEdit,
          subtasks,
          setSubtasks,
          dots,
          setDots,
          deleteTask,
          setDeleteTask,
          view,
          setView,
          register,
          handleSubmit,
          checkboxes,
          setCheckboxes,
          data,
          setData,
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
