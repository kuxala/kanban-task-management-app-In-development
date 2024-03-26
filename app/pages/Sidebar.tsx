"use client";
import { useContext, useState } from "react";
import "../styles/Sidebar.css";
import Link from "next/link";
import useStore from "../useStore";
import MobileSidebar from "./MobileSidebar";
import AddBoard from "../components/AddBoard";
import { Switch } from "@mui/material";

const bgColor = {
  backgroundColor: "#635FC7",
  color: "#fff",
};

export default function Sidebar() {
  const {
    sidebar,
    setSidebar,
    active,
    setActive,
    data,
    setData,
    addNewBoard,
    setAddNewBoard,
  }: any = useStore();

  const addToBoard = () => {
    const newBoardName = "raime";

    if (!newBoardName) return alert("Please enter a valid name");

    const lastBoard = data.boards[data.boards.length - 1];
    const newBoardId = lastBoard ? lastBoard.id + 1 : 1;

    const newBoard = {
      id: newBoardId,
      name: newBoardName,
      columns: [],
    };

    setData((prevData: any) => {
      const newData = {
        ...prevData,
        boards: [...prevData.boards, newBoard],
      };

      return newData;
    });
  };
  return (
    <>
      {addNewBoard ? <AddBoard /> : null}
      <MobileSidebar />
      <div className={sidebar ? "sidebar" : "sidebar__hidden"}>
        <div className="sidebar__texts ">
          <p className="sidebar__header">All Boards ({data.boards.length})</p>
          <div className="flex flex-col gap-1">
            {data?.boards?.map((item: any) => (
              <div key={item.id} className="flex">
                <Link
                  style={active === item.name ? bgColor : {}}
                  onClick={() => setActive(item.name)}
                  className="sidebar__boards"
                  href={`/${item?.name?.replaceAll(" ", "-")}`}
                >
                  <img src="assets/icon-board.svg" alt="icon-board" />
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="sidebar__add__board flex gap-2 items-center">
              <button
                onClick={() => {
                  setAddNewBoard(true);
                }}
              >
                + Create New Board
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar__darkmode__div">
          <div className="sidebar__darkmode flex gap-3">
            <img src="/assets/icon-light-theme.svg" />
            <div
            // onClick={() => {
            //   setDarkmode(!darkmode);
            // }}
            >
              <Switch defaultChecked={false} />
            </div>
            <img src="/assets/icon-dark-theme.svg" />
          </div>
          <div
            className="flex gap-2 items-center pl-8 pt-4 pb-10"
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            <img src="/assets/icon-hide-sidebar.svg" />{" "}
            <p className="sidebar__hide "> Hide Sidebar</p>
          </div>
        </div>
      </div>

      {!sidebar && (
        <div
          className="flex items-end min-h-[80vh] max-w-16"
          onClick={() => setSidebar(!sidebar)}
        >
          <div className="sidebar__show flex items-center justify-center pr-2 max-w-16">
            <img src="/assets/icon-show-sidebar.svg" alt="" />
          </div>
        </div>
      )}
    </>
  );
}
