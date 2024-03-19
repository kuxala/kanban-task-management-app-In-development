import { useContext } from "react";
import { AppContext } from "../page";
import Overlay from "../pages/Overlay";

export default function View() {
  const { view, setView }: any = useContext(AppContext);
  console.log(view);
  return (
    <>
      <Overlay isOpen={view} onClose={() => setView(false)} />
      <div className="absolute top-0 left-0 right-0 bg-white m-6 p-6 z-50">
        <div>
          <h1>Text Header</h1>
          <p>Description</p>
        </div>
        <div>
          <h3>Subtask (s)</h3>
          <div>
            <h3>1</h3>
            <h3>2</h3>
          </div>
        </div>
        <div>
          <h3>Current Status</h3>
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
