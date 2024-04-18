"use client";
import { useContext, useState } from "react";
import "../styles/MainSection.css";
import useStore from "../useStore";
import styled from "styled-components";

export default function MainSection() {
  const { addNew, addNewBoard, setAddNewBoard, sidebar }: any = useStore();
  return (
    <>
      <CenterDiv>
        <div className="flex flex-col justify-center items-center ">
          <p className="section__text">
            This board is empty. Create a new column to get started
          </p>
          <button
            className="section__addnew__button"
            onClick={() => setAddNewBoard(!addNewBoard)}
          >
            + Create New Column
          </button>
        </div>
      </CenterDiv>
    </>
  );
}
const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  /* @media only screen and (max-width: 768px) {
  } */
`;
