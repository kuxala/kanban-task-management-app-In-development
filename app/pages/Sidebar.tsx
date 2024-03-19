import { useState, useContext } from "react";
import "../styles/Sidebar.css";
import { AppContext } from "../page";
import MobileSidebar from "./MobileSidebar";
import Darkmode from "../components/Darkmode";

export default function Sidebar() {
  const {
    sidebar,
    setSidebar,
    boards,
    setBoards,
    selectedBoardIndex,
    setSelectedBoardIndex,
    data,
    setData,
  }: any = useContext(AppContext);

  return (
    <>
      <MobileSidebar />

      <div className={sidebar ? "sidebar" : "sidebar__hidden"}>
        <div className="sidebar__texts">
          <p className="sidebar__header">All Boards ({boards.length})</p>

          <div className="flex flex-col gap-1">
            {data.boards.map((item: any) => {
              return (
                <div className="flex">
                  <p className="sidebar__boards ">
                    <img src="assets/icon-board.svg" />
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="sidebar__add__board flex gap-2 items-center ">
            <img
              src="/assets/icon-board.svg"
              alt="icon-board"
              width="16px"
              height="16px"
            />
            + Create New Board
          </p>
        </div>

        <div className="pt-8 ">
          <Darkmode />
        </div>
        <div
          className="flex gap-2 items-center pl-8 pt-4"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <img src="/assets/icon-hide-sidebar.svg" alt="" />
          <p className="sidebar__hide"> Hide Sidebar</p>
        </div>
      </div>
      {!sidebar && (
        <div
          className="flex items-end min-h-[80vh] max-w-16"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <div className="sidebar__show flex items-center justify-center pr-2 max-w-16 ">
            <img src="/assets/icon-show-sidebar.svg" alt="" />
          </div>
        </div>
      )}
    </>
  );
}
