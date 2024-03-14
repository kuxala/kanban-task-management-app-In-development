import { useState } from "react";
import "../styles/MainSection.css";

export default function MainSection() {
  const [isEmpty, setIsEmpty] = useState(true);
  console.log(isEmpty);
  return (
    <>
      <div className="w-screen flex">
        {isEmpty ? (
          <div className="section__addnew">
            <p className="section__text">
              This board is empty. Create a new column to get started
            </p>
            <button
              className="section__addnew__button"
              onClick={() => {
                setIsEmpty(false);
              }}
            >
              + Create New Column
            </button>
          </div>
        ) : (
          <div className="section__rows">
            <h3 className="ml-4 mt-4">TODO</h3>
            <div className="section__div">
              <h1>text descriptipon</h1>
              <h3>Subtasks</h3>
            </div>
            <div className="section__div">
              <h1>text descriptipon</h1>
              <h3>Subtasks</h3>
            </div>
          </div>
        )}

        {/* <div className="section-columns">
          <h3 className="ml-4 mt-4">Doing</h3>
          <div className="section__div">
            <h1>text descriptipon</h1>
            <h3>Subtasks</h3>
          </div>
        </div>
        <div>
          <h3 className="ml-4 mt-4">Done</h3>
          <div className="section__div">
            <h1>text descriptipon</h1>
            <h3>Subtasks</h3>
          </div>
        </div> */}
      </div>
    </>
  );
}
