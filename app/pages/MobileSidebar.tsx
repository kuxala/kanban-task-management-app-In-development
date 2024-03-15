import { useContext } from "react";
import { AppContext } from "../page";
import Overlay from "./Overlay";

export default function MobileSidebar() {
  const { menu, setMenu }: any = useContext(AppContext);
  return (
    <>
      <Overlay isOpen={menu} onClose={() => setMenu(false)} />
      {menu && (
        <div className="absolute bg-white w-[80%] rounded-lg left-1/2 transform -translate-x-1/2 h-[20vh]">
          <h1 className="text-gray-500 text-xs font-bold tracking-wide mt-4 ml-4">
            All Boards
          </h1>
          <div></div>
        </div>
      )}
    </>
  );
}
