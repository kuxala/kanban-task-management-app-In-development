"use client";
import { useContext } from "react";
import "../styles/Sidebar.css";
import Switch from "@mui/material/Switch";
import { AppContext } from "../page";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Sidebar() {
  const { darkmode, setDarkmode }: any = useContext(AppContext);
  const { sidebar, setSidebar }: any = useContext(AppContext);

  return (
    <>
      <div className={sidebar ? "sidebar" : "sidebar__hidden"}>
        <div className="sidebar__texts">
          <p className="sidebar__header">All Boards (number)</p>

          <div className="flex flex-col gap-2">
            <p className="sidebar__boards" tabIndex={0}>
              <img src="/assets/icon-board.svg" />
              First one
            </p>
            <p className="sidebar__boards" tabIndex={0}>
              <img src="/assets/icon-board.svg" />
              Second one
            </p>
          </div>

          <p
            className="sidebar__add__board flex gap-2 items-center "
            onClick={() => {}}
          >
            <img src="/assets/icon-board.svg" width="16px" height="16px" />+
            Create New Board
          </p>
        </div>

        <div className="sidebar__darkmode__div">
          <div className="sidebar__darkmode flex gap-3">
            <img src="/assets/icon-light-theme.svg" />
            <div
              onClick={() => {
                setDarkmode(!darkmode);
              }}
            >
              <Switch {...label} defaultChecked={false} />
            </div>
            <img src="/assets/icon-dark-theme.svg" />
          </div>
        </div>

        <div
          className="flex gap-2 items-center pl-8 pt-4"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <img src="/assets/icon-hide-sidebar.svg" />{" "}
          <p className="sidebar__hide"> Hide Sidebar</p>
        </div>
      </div>
      {sidebar ? null : (
        <div
          className="flex items-end min-h-[80vh] max-w-16"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <div className="sidebar__show flex items-center justify-center pr-2 max-w-16 ">
            <img src="/assets/icon-show-sidebar.svg" />
          </div>
        </div>
      )}
    </>
  );
}
