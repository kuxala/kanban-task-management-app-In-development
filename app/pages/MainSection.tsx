"use client";
import { useContext, useState } from "react";
import "../styles/MainSection.css";
import useStore from "../useStore";

export default function MainSection() {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <>
      <div className="w-screen flex">
        {isEmpty && (
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
        )}
      </div>
    </>
  );
}
