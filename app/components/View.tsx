import { useContext } from "react";
import { AppContext } from "../page";
import Overlay from "../pages/Overlay";

export default function View() {
  const { view, setView }: any = useContext(AppContext);
  return (
    <>
      <Overlay isOpen={view} onClose={() => setView(false)} />
      <div className="absolute top-0 md:top-[20%] md:left-1/2 md:-translate-x-1/2 rounded-[8px] left-0 right-0 bg-white m-6 p-6 z-50 md:w-[500px]">
        <div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="pb-6 text-black-900 font-bold text-lg font-feature-settings">
              Text Headera osdkoa skdpasokdpaoskdpaoskd
            </h1>
            <img src="/assets/icon-vertical-ellipsis.svg" className="h-full" />
          </div>
          <p className="pb-6 text-gray-500 font-medium text-base leading-6 font-feature-settings">
            Description asd asdasokdoaks dopaks okasop dkasj diajs
          </p>
        </div>
        <div>
          <h3 className="pb-4 text-gray-500 font-bold text-xs leading-normal">
            Subtask (s)
          </h3>
          <div>
            <h3>1</h3>
            <h3>2</h3>
          </div>
        </div>
        <div>
          <h3 className="pt-6 pb-2 text-gray-500 font-bold text-xs leading-normal ">
            Current Status
          </h3>
          <select className="w-full h-12 border border-gray-300 rounded-md p-2 bg-white">
            <option value="1">Todo</option>
            <option value="2">Doing</option>
            <option value="2">Done</option>
          </select>
        </div>
      </div>
    </>
  );
}
