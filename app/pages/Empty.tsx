"use client";
import { useContext, useState } from "react";
import "../styles/MainSection.css";
import useStore from "../useStore";

export default function MainSection() {
  return (
    <>
      <div className="w-screen flex items-center justify-center mt-24 ">
        <div className="flex flex-col justify-center items-center">
          <p className="section__text">
            This board is empty. Create a new column to get started
          </p>
          <button className="section__addnew__button">
            + Create New Column
          </button>
        </div>
      </div>
    </>
  );
}
