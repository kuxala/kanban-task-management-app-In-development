"use client";
import "../styles/Header.css";
import React, { useState } from "react";
import AddNew from "./AddNew";
import HeaderDots from "../components/HeaderDots";
import useStore from "../useStore";
import { useParams } from "next/navigation";
import EditBoard from "../components/EditBoard";

export default function Header() {
  const { addNew, setAddNew, menu, setMenu, darkmode, boards }: any =
    useStore();
  const params = useParams();

  const editedBoardName = () => {
    let editedName = "";
    boards.forEach((board: any) => {
      if (board?.name?.replace(" ", "-") === params.main) {
        editedName = board.name;
      }
    });
    return editedName;
  };

  const [dots, setDots] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          {darkmode ? (
            <img
              src="/assets/logo-light.svg"
              alt="Logo"
              className="header__logo__desktop"
            />
          ) : (
            <img
              src="/assets/logo-dark.svg"
              alt="Logo"
              className="header__logo__desktop"
            />
          )}

          <img
            src="/assets/logo-mobile.svg"
            alt="Logo"
            className="header__logo__mobile"
          />
          <div className="header__title">
            <h1
              className="text-[#000112] font-[700] text-[22px]"
              style={{ color: darkmode ? "#fff" : "black" }}
            >
              {editedBoardName()}
            </h1>
          </div>
          <img
            src="../../assets/icon-chevron-down.svg"
            className="ml-2 header__chevron__down"
            width="15px"
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>
        <div className="header__actions">
          <button
            className="header__button__desktop"
            onClick={() => {
              setAddNew(!addNew);
            }}
          >
            Add New Task
          </button>
          <div
            className="header__button__mobile"
            onClick={() => {
              setAddNew(!addNew);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="32"
              viewBox="0 0 48 32"
              fill="none"
            >
              <rect width="48" height="32" rx="16" fill="#635FC7" />
              <path
                d="M25.368 22V17.344H30V14.632H25.368V10H22.656V14.632H18V17.344H22.656V22H25.368Z"
                fill="white"
              />
            </svg>
          </div>
          <img
            src="/assets/icon-vertical-ellipsis.svg"
            className="header__icon cursor-pointer"
            onClick={() => {
              setDots(!dots);
            }}
          />
        </div>
      </header>
      {dots ? <HeaderDots /> : null}

      {addNew ? <AddNew /> : null}
    </>
  );
}
