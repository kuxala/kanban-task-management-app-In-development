import { useContext } from "react";
import { AppContext } from "../page";
import Overlay from "./Overlay";
import Darkmode from "../components/Darkmode";

export default function MobileSidebar() {
  const { menu, setMenu }: any = useContext(AppContext);

  return (
    <>
      <Overlay isOpen={menu} onClose={() => setMenu(false)} />
      {menu && (
        <div className="absolute bg-white w-[80%] rounded-lg left-1/2 transform -translate-x-1/2 min-h-[20vh]">
          <h1 className="text-gray-500 text-xs font-bold tracking-wide mt-4 ml-4">
            All Boards
          </h1>
          <div>
            <div className="sidebar__texts">
              <div className="flex flex-col gap-2">
                <p
                  className="flex gap-10 w-95 items-center pl-8 text-gray-500 rounded-r-full h-12 font-sans font-bold text-base leading-normal"
                  tabIndex={0}
                >
                  <img src="/assets/icon-board.svg" />
                  First one
                </p>
                <p
                  className="flex gap-10 w-95 items-center pl-8 text-gray-500 rounded-r-full h-12 font-sans font-bold text-base leading-normal"
                  tabIndex={0}
                >
                  <img src="/assets/icon-board.svg" />
                  Second one
                </p>
              </div>

              <p
                className="text-purple-700 font-sans font-bold text-base leading-normal pl-8 pt-4 pb-4  flex gap-2 items-center "
                onClick={() => {}}
              >
                <img src="/assets/icon-board.svg" width="16px" height="16px" />+
                Create New Board
              </p>
            </div>
            <Darkmode />
          </div>
        </div>
      )}
    </>
  );
}
