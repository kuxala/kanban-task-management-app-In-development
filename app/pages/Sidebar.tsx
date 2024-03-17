import { useState, useContext } from "react";
import "../styles/Sidebar.css";
import { AppContext } from "../page";
import MobileSidebar from "./MobileSidebar";
import Darkmode from "../components/Darkmode";

export default function Sidebar() {
  const { sidebar, setSidebar }: any = useContext(AppContext);
  const { boards, setBoards }: any = useContext(AppContext);
  const { selectedBoardIndex, setSelectedBoardIndex }: any =
    useContext(AppContext);

  const addNewBoard = () => {
    const newBoardName = prompt("Enter the name of the new board:");
    if (newBoardName) {
      setBoards((prevBoards: any) => [...prevBoards, newBoardName]);
    }
  };

  const handleBoardClick = (index: number) => {
    setSelectedBoardIndex(index === selectedBoardIndex ? null : index);
  };

  return (
    <>
      <MobileSidebar />

      <div className={sidebar ? "sidebar" : "sidebar__hidden"}>
        <div className="sidebar__texts">
          <p className="sidebar__header">All Boards ({boards.length})</p>

          <div className="flex flex-col gap-2">
            {boards.map((board: any, index: number) => (
              <p
                key={index}
                className={`sidebar__boards ${
                  selectedBoardIndex === index ? "active" : ""
                }`}
                tabIndex={0}
                onClick={() => handleBoardClick(index)}
              >
                <img src="/assets/icon-board.svg" alt="" />
                {board}
              </p>
            ))}
          </div>

          <p
            className="sidebar__add__board flex gap-2 items-center "
            onClick={addNewBoard}
            tabIndex={0}
          >
            <img
              src="/assets/icon-board.svg"
              alt=""
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
          <img src="/assets/icon-hide-sidebar.svg" alt="" />{" "}
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
