import { useState, useContext } from "react";
import Overlay from "./Overlay";
import Darkmode from "../components/Darkmode";
import useStore from "../useStore";
import Link from "next/link";
import AddBoard from "../components/AddBoard";

export default function MobileSidebar() {
  const {
    menu,
    setMenu,
    data,
    setData,
    active,
    setActive,
    addNewBoard,
    setAddNewBoard,
  }: any = useStore();
  const bgColor = {
    backgroundColor: "#635FC7",
    color: "#fff",
  };

  return (
    <>
      {addNewBoard ? <AddBoard /> : null}
      <Overlay isOpen={menu} onClose={() => setMenu(false)} />
      {menu && (
        <div className="absolute bg-white w-[80%] rounded-lg left-1/2 transform -translate-x-1/2 min-h-[20vh] z-30">
          <h1 className="text-gray-500 text-xs font-bold tracking-wide mt-4 ml-4 pb-4">
            All Boards
          </h1>
          <div>
            <div className="sidebar__texts">
              <div className="flex flex-col gap-2">
                {data?.boards?.map((item: any) => (
                  <Link
                    style={active === item.name ? bgColor : {}}
                    onClick={() => {
                      setActive(item.name);
                    }}
                    href={`/${item?.name?.replaceAll(" ", "-")}`}
                    className="flex gap-4 w-95 items-center pl-8 text-gray-500 rounded-r-full h-12 font-sans font-bold text-base leading-normal"
                  >
                    <img src="/assets/icon-board.svg" alt="" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <p
                className="text-purple-700 font-sans font-bold text-base leading-normal pl-8 mt-4 pb-4  flex gap-2 items-center "
                tabIndex={0}
                onClick={() => setAddNewBoard(!addNewBoard)}
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
            <div className="pt-4 pl-8 pr-8 pb-4">
              <Darkmode />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
