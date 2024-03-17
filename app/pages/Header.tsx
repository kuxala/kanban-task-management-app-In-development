import { AppContext } from "../page";
import "../styles/Header.css";
import React, { useContext } from "react";
import EditTask from "./EditTask";
import AddNew from "./AddNew";
export default function Header() {
  const { isOpen, setIsOpen }: any = useContext(AppContext);
  const { menu, setMenu }: any = useContext(AppContext);
  const { addNew, setAddNew }: any = useContext(AppContext);
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img
            src="/assets/logo-dark.svg"
            alt="Logo"
            className="header__logo__desktop"
          />
          <img
            src="/assets/logo-mobile.svg"
            alt="Logo"
            className="header__logo__mobile"
          />
          <h1 className="header__title">Platform Launch</h1>
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
            className="header__icon"
          />
        </div>
      </header>
      {addNew ? <AddNew /> : null}
    </>
  );
}
