// AddNew.js
import { useContext, useState } from "react";
import Overlay from "./Overlay"; // Import Overlay component
import "../styles/AddNew.css";
import { AppContext } from "../page";

export default function AddNew() {
  const { isOpen, setIsOpen }: any = useContext(AppContext);
  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open Add New Task</button> */}
      <Overlay isOpen={isOpen} onClose={() => setIsOpen(false)} />{" "}
      {isOpen && (
        <div className="addnew__container absolute bg-white p-6 ">
          <h1 className="text-black font-sans font-semibold text-lg pb-6">
            Add New Task
          </h1>
          <div>
            <div>
              <h3>Title</h3>
              <input />
            </div>
            <div>
              <h3>Description</h3>
              <input />
            </div>
            <div>
              <h3>SubTasks</h3>
              <div>
                <input />
                <img src="/assets/icon-cross.svg" />
              </div>
              <button>Add New Subtask</button>
            </div>
            <div>
              <h3>Status</h3>
              <input />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
